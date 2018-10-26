class CapaController {

  constructor(data){
    let $ = document.querySelector.bind(document);
    this._dataOed = data;
    this._abertura = data[0].abertura;

    this._capaTemplate = new CapaView($("#oed"));
    this.carregaTemplate();

    this._janelasSlides = document.querySelectorAll('.janela-slide');
    this._qtdSlides = this._janelasSlides.length;
    this._janelasSlides = document.querySelectorAll('.janela-slide');
    this._janelaCreditos = document.querySelector('#oed-creditos');
    this._janelaAjuda = document.querySelector('#oed-ajuda');
  }
  carregaTemplate(){
    this._capaTemplate.update(this._dataOed);
    this.startOed();
    if(this._abertura){
      setTimeout(function(){
        let $abertura = document.querySelector('.abertura');
        $abertura.parentNode.removeChild($abertura);
      },3000);
    }
  }
  startOed(){

    let btnStart = document.querySelector('.btn-start-oed');
    let btn_nav_sliderAnterior = document.querySelector(".nav-anterior");
    let btn_nav_sliderProximo = document.querySelector(".nav-proximo");
    let btn_nav_restart = document.querySelector(".nav-restart");
    let btn_creditos = document.querySelectorAll('.btn-creditos');
    let btn_ajuda = document.querySelectorAll('.btn-ajuda');
    
    let paginaAtual = 1;
    if(paginaAtual == this._qtdSlides){
      btn_nav_sliderProximo.classList.add('disable');
      btn_nav_restart.classList.add('enable');
    }

    let iniciaOed = ()=>{
      let capa = document.querySelector("#capa");
      capa.classList.add("animated","zoomOutLeft");
      capa.addEventListener("animationend", function() {
        this.style.display = "none";
        this.classList.remove("animated","zoomOutLeft");
      }, false);
      ObjetoEducacional();
    }

    btnStart.addEventListener("click", e => {
      e.preventDefault();
      iniciaOed();
    });
    let startEnter = true;
    addEventListener('keypress',(e)=> {
      startEnter ? (
        e.keyCode == 13 ? (
            iniciaOed(),
            startEnter = false
          ) : ''
        ) : '';
    });

    let animatePressButton = (el)=>{
      el.classList.add('press-button');
      el.addEventListener('animationend',()=>{
        if(el.classList.contains('press-button')) el.classList.remove('press-button');
      });
    }

    btn_nav_sliderAnterior.addEventListener('click',(ev)=>{
      let estebotao = btn_nav_sliderAnterior;
      ev.preventDefault();
      if(!estebotao.classList.contains('disable')){
        if(paginaAtual >= 1){
          animatePressButton(estebotao);
          for(let x=0;x<this._qtdSlides;x++){
            this._janelasSlides[x].style.display = 'none';
          }
          paginaAtual--;
          this._janelasSlides[paginaAtual-1].style.display = 'block';
          if(!btn_nav_sliderProximo.classList.contains('off')) btn_nav_sliderProximo.classList.remove('disable');
          if(paginaAtual == 1) estebotao.classList.add('disable');
          if(paginaAtual == this._qtdSlides){
            btn_nav_restart.classList.add('enable');
          }else{
            if(btn_nav_restart.classList.contains('enable')){
              btn_nav_restart.classList.remove('enable');
            }
          }
        }
      }
    });
    btn_nav_sliderProximo.addEventListener('click',(ev)=>{
      let estebotao = btn_nav_sliderProximo;
      ev.preventDefault();
      if(!estebotao.classList.contains('disable')){
        if(paginaAtual < this._qtdSlides){
          animatePressButton(estebotao);
          for(let x=0;x<this._qtdSlides;x++){
            this._janelasSlides[x].style.display = 'none';
          }
          this._janelasSlides[paginaAtual].style.display = 'block';
          paginaAtual++;
          if(!btn_nav_sliderAnterior.classList.contains('off')) btn_nav_sliderAnterior.classList.remove('disable');
          if(paginaAtual == this._qtdSlides){
            btn_nav_sliderProximo.classList.add('disable');
            btn_nav_restart.classList.add('enable');
          }else{
            if(btn_nav_restart.classList.contains('enable')){
              btn_nav_restart.classList.remove('enable');
            }
          }
        }
      }

    });
    btn_nav_restart.addEventListener('click',function(ev){
      let estebotao = this;
      ev.preventDefault();
      if(estebotao.classList.contains('enable')){
        window.location.reload();
      }
    });

    
    let verificaJanela = (tipo)=> {
      if(tipo == 'creditos'){
        if(this._janelaCreditos.classList.contains('creditos-aberta')){
          this._janelaCreditos.classList.remove('creditos-aberta');
          this._janelaCreditos.classList.add('creditos-oculto');
        }else if(this._janelaCreditos.classList.contains('creditos-oculto')){
          if(this._janelaAjuda.classList.contains('ajuda-aberta')){
            this._janelaAjuda.classList.add('ajuda-oculta');
            this._janelaAjuda.classList.remove('ajuda-aberta');
          }
          this._janelaCreditos.classList.remove('creditos-oculto');
          this._janelaCreditos.classList.add('creditos-aberta');
        }
      }else if(tipo == 'ajuda'){
        if(this._janelaAjuda.classList.contains('ajuda-aberta')){
          this._janelaAjuda.classList.remove('ajuda-aberta');
          this._janelaAjuda.classList.add('ajuda-oculta');
        }else if(this._janelaAjuda.classList.contains('ajuda-oculta')){
          if(this._janelaCreditos.classList.contains('creditos-aberta')){
            this._janelaCreditos.classList.remove('creditos-aberta');
            this._janelaCreditos.classList.add('creditos-oculto');
          }
          this._janelaAjuda.classList.remove('ajuda-oculta');
          this._janelaAjuda.classList.add('ajuda-aberta');
        }
      }
    }

    btn_creditos.forEach(function(btn){
      btn.addEventListener('click',()=>{
        animatePressButton(btn);
        verificaJanela('creditos');
      });  
    });
    btn_ajuda.forEach(function(btn){
      btn.addEventListener('click',()=>{
        animatePressButton(btn);
        verificaJanela('ajuda')
      });  
    });

  }
  janelaAjuda(texto){
    let janelaAjuda = document.querySelector('#oed-ajuda .conteudo');
    let layout;
    if(texto){
      layout = `
        <h3>Ajuda</h3>
        <div class="conteudo-ajuda">
          ${texto}
        </div>
      `;
    }else{
      layout = `
        <h3>Ajuda</h3>
        <div class="conteudo-ajuda">
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-avancar.png" width="auto" height="30" alt="Botao de navegação - Avançar" /> Avançar para a próxima tela.<br/>
          </p>
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-voltar.png" width="auto" height="30" alt="Botao de navegação - Voltar" /> Retornar à tela anterior.<br/>
          </p>
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-fechar.png" width="auto" height="30" alt="Botao de navegação - Voltar" /> Ocultar caixa de texto.<br/>
          </p>
        </div>
      `;
    }
    janelaAjuda.innerHTML = layout;
  }
  trocaSlide(numero_slide){
    // if(){}
  }
}
