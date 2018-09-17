class Template {

  constructor(){
    //ConfigJS
    this._abertura = ConfigTemplate.abertura;
    this._caracterizado = ConfigTemplate.caracterizado;

    //TemplateJS
    this._titulo = ConfigTemplate.titulo;
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#producao');
    this.createTemplate();
    this._selectDevice = this.selectDevice();

    window.onresize = ()=> this.selectDevice();
    new Creditos();
  }
  
  createTemplate(){
    let titulo = document.createElement('h1');
    let botaoStart = document.createElement('button');
        botaoStart.setAttribute('class','btn-start-oed');
        botaoStart.innerHTML = "Play";
    
    let navOed = document.createElement('div');
        navOed.setAttribute('id','nav-oed');
    
    let logoEbsa = document.createElement('div');
        logoEbsa.setAttribute('class','logo-ebsa');
    
    let logoColecao = document.createElement('div');
        logoColecao.setAttribute('class','logo-colecao');
    
    titulo.innerHTML = this._titulo;

    let iniciaOed = ()=>{
      let capa = document.querySelector("#capa");
          capa.style.display = "none";
          ObjetoEducacional();
    }

    this._window.childNodes[1].appendChild(titulo);    
    this._window.childNodes[1].appendChild(botaoStart);    
    this._window.childNodes[1].appendChild(logoEbsa);    
    this._window.childNodes[1].appendChild(logoColecao);    
    this._producao.appendChild(navOed);   
    
    botaoStart.addEventListener('click',iniciaOed);
  }
  adjustLargerScreen() {
    let elemento = this._window;
  
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;
    let larguraInicialElemento = 1024;
    let alturaInicialElemento = 660;
    let alturaRedimensionada;
    let larguraRedimensionada;
    let escalaLargura
    let escalaAltura
  
    let relacaoAspecto = larguraInicialElemento / alturaInicialElemento;
  
    if(alturaJanela <= larguraJanela){
      alturaRedimensionada = alturaJanela;
      larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
      if(larguraJanela < larguraRedimensionada){
        alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
        larguraRedimensionada = larguraJanela;
      }
    }else {
      larguraRedimensionada = larguraJanela;
      alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
    }
  
    escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
    escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
    if(escalaLargura > 0.91 && escalaLargura <= 1){
      elemento.style.transform = 'scale(.9)';
      elemento.style.OTransform = 'scale(.9)';
      elemento.style.msTransform = 'scale(.9)';
      elemento.style.MozTransform = 'scale(.9)';
      elemento.style.WebkitTransform = 'scale(.9)';
    }else if(escalaLargura > 0.81 && escalaLargura <= 0.9){
      elemento.style.transform = 'scale(.8)';
      elemento.style.OTransform = 'scale(.8)';
      elemento.style.msTransform = 'scale(.8)';
      elemento.style.MozTransform = 'scale(.8)';
      elemento.style.WebkitTransform = 'scale(.8)';
    }else if(escalaLargura <= 0.809){
      elemento.style.transform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
      elemento.style.OTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
      elemento.style.msTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
      elemento.style.MozTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
      elemento.style.WebkitTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
    }else{
      elemento.style.transform = 'scale(1)';
      elemento.style.OTransform = 'scale(1)';
      elemento.style.msTransform = 'scale(1)';
      elemento.style.MozTransform = 'scale(1)';
      elemento.style.WebkitTransform = 'scale(1)';
    }
    let	larguraDocumento = window.innerWidth;
    let alturaDocumento = window.innerHeight;

    elemento.style.left = (larguraDocumento / 2) - 1024 / 2+'px';
    elemento.style.top = (alturaDocumento / 2) - 660 / 2+'px';
  };
  selectDevice(){
    
    if(navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      navigator.userAgent.match(/ZuneWP7/i)){
      // ajusteMobile();
    }else{
      this.adjustLargerScreen();
    }
  }  
}

class Ajuda {
  constructor(titulo, html){
    this._titulo = titulo;
    this._html = html;
    this._ajuda = document.createElement('div');
      this._ajuda.setAttribute('id','oed-ajuda');
      this._ajuda.setAttribute('class','ajuda-oculta');
    this._ajudaContainer = document.createElement('div');
      this._ajudaContainer.setAttribute('class','conteudo');
    this._buttonAjuda = document.createElement('button');
      this._buttonAjuda.setAttribute('class','btn-ajuda');
      this._buttonAjuda.innerHTML = 'Fechar Ajuda';
    this._buttonAjudaProducao = document.createElement('button');
      this._buttonAjudaProducao.setAttribute('class','btn-ajuda btn-ativo');
      this._buttonAjudaProducao.innerHTML = 'Ajuda';
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#nav-oed');
    this.createWindow();
  }
  createWindow(){
    this._window.appendChild(this._ajuda);
    this._ajuda.appendChild(this._buttonAjuda);
    this._ajuda.appendChild(this._ajudaContainer);
    this._producao.appendChild(this._buttonAjudaProducao);

    let janela = document.querySelector('#oed-ajuda');
    let verificaJanela = ()=> {
      if(janela.classList.contains('ajuda-aberta')){
        janela.classList.remove('ajuda-aberta');
        janela.classList.add('ajuda-oculta');
      }else if(janela.classList.contains('ajuda-oculta')){
        this.verificaCreditos();
        janela.classList.remove('ajuda-oculta');
        janela.classList.add('ajuda-aberta');
      }
    }

    setTimeout(function(){
      let botoesAjuda = document.querySelectorAll('.btn-ajuda');
      botoesAjuda.forEach(function(btn){
        btn.addEventListener('click',verificaJanela);  
      });
    },200);
  }
  data(titulo,html){
    let layout = `
      <h3>${titulo}</h3>
      <div class="conteudo-ajuda">
        ${html}
      </div>
    `;
    this._ajudaContainer.innerHTML = layout;
  }
  verificaCreditos(){
    let janela = document.querySelector('#oed-creditos');
    if(janela.classList.contains('creditos-aberta')){
      janela.classList.remove('creditos-aberta');
      janela.classList.add('creditos-oculto');
    }
  }
}

class Creditos {
  constructor(titulo, html){
    this._arrayCreditos = MeusCreditos;
    this._creditos = document.createElement('div');
      this._creditos.setAttribute('id','oed-creditos');
      this._creditos.setAttribute('class','creditos-oculto');
    this._creditosContainer = document.createElement('div');
      this._creditosContainer.setAttribute('class','conteudo');
    this._buttonCreditos = document.createElement('button');
      this._buttonCreditos.setAttribute('class','btn-creditos');
      this._buttonCreditos.innerHTML = 'Fechar Créditos';
    this._buttonCreditosProducao = document.createElement('button');
      this._buttonCreditosProducao.setAttribute('class','btn-creditos btn-ativo');
      this._buttonCreditosProducao.innerHTML = 'Créditos';
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#nav-oed');
    this.createWindow();
    this.data('Créditos',this._arrayCreditos);
  }
  createWindow(){
    this._window.appendChild(this._creditos);
    this._creditos.appendChild(this._buttonCreditos);
    this._creditos.appendChild(this._creditosContainer);
    this._producao.appendChild(this._buttonCreditosProducao);

    let janela = document.querySelector('#oed-creditos');
    let verificaJanela = ()=> {
      if(janela.classList.contains('creditos-aberta')){
        janela.classList.remove('creditos-aberta');
        janela.classList.add('creditos-oculto');
      }else if(janela.classList.contains('creditos-oculto')){
        this.verificaAjuda();
        janela.classList.remove('creditos-oculto');
        janela.classList.add('creditos-aberta');
      }
    }

    setTimeout(function(){
      let botoesCredito = document.querySelectorAll('.btn-creditos');
      botoesCredito.forEach(function(btn){
        btn.addEventListener('click',verificaJanela);  
      });
    },200);
  }
  data(titulo,arrayCreditos){
    let autores = '';
      arrayCreditos.forEach(function(objeto) {
        for ( var chave in objeto )
            autores += (chave +': '+objeto[chave]+'<br/>');
      });
    
    
    let layout = `
      <h3>${titulo}</h3>
      <div class="conteudo-ajuda">
        <p>${autores}</p>
      </div>
    `;
    this._creditosContainer.innerHTML = layout;
  }
  verificaAjuda(){
    let janela = document.querySelector('#oed-ajuda');
    if(janela.classList.contains('ajuda-aberta')){
      janela.classList.remove('ajuda-aberta');
      janela.classList.add('ajuda-oculta');
    }
  }
}

class Navegacao {
  constructor(minhaClass){
    this._nav = minhaClass;
    
    this._navSlideAnterior = document.createElement('button');
      this._navSlideAnterior.setAttribute('class','nav-anterior disable');
      this._navSlideAnterior.innerHTML = "Voltar";
    this._navSlideProximo = document.createElement('button');
      this._navSlideProximo.setAttribute('class','nav-proximo');
      this._navSlideProximo.innerHTML = "Próximo";

    this._navSlideAnteriorEnable = false;
    this._navSlideProximoEnable = true;

    this._janelasSlides = document.querySelectorAll('.janela-slide');
    this._qtdSlide = this._janelasSlides.length;
    this._nPages = 1;

    this._producao = document.querySelector('#nav-oed');
    this.createNav();

    this._disablePrev = false;
  }
  createNav(){
    this._producao.appendChild(this._navSlideAnterior);
    this._producao.appendChild(this._navSlideProximo);

    let total_paginas = this._qtdSlide;
    let pagina_atual = 1;

    let btnAnterior = document.querySelector('.nav-anterior');
    let btnProximo = document.querySelector('.nav-proximo');
    
    this._navSlideAnterior.addEventListener('click',function(){
      if(!btnAnterior.classList.contains('disable')){
        if(pagina_atual >= 1){
          for(let x=0;x<total_paginas;x++){
            document.querySelectorAll('.janela-slide')[x].style.display = 'none';
          }
          pagina_atual--;
          document.querySelectorAll('.janela-slide')[pagina_atual-1].style.display = 'block';
          document.querySelector('.nav-proximo').classList.remove('disable');
          if(pagina_atual == 1) document.querySelector('.nav-anterior').classList.add('disable');
        }
      }
    });
    setTimeout(function(){
      alert(this._disablePrev);
    },3000);
    this._navSlideProximo.addEventListener('click',function(){
      if(!btnProximo.classList.contains('disable')){
        if(pagina_atual < total_paginas){
          for(let x=0;x<total_paginas;x++){
            document.querySelectorAll('.janela-slide')[x].style.display = 'none';
          }
          document.querySelectorAll('.janela-slide')[pagina_atual].style.display = 'block';
          pagina_atual++;
          
          document.querySelector('.nav-anterior').classList.remove('disable');
          if(pagina_atual == total_paginas) document.querySelector('.nav-proximo').classList.add('disable');
        }
      }
    });
  }
  disablePrevious(){
    this._disablePrev = true;
    document.querySelector('.nav-anterior').classList.add('disable');
  }
  disableNext(){
    document.querySelector('.nav-proximo').classList.add('disable');
  }
  enablePrevious(){
    document.querySelector('.nav-anterior').classList.remove('disable');
  }
  enableNext(){
    document.querySelector('.nav-proximo').classList.remove('disable');
  }
}
let app = new Template();
