class Loader {

  constructor(){
    this._src = new Array(
      './assets/img/abertura-animation.jpg',
      './assets/img/ajuda-avancar.png',
      './assets/img/ajuda-fechar.png',
      './assets/img/ajuda-voltar.png',
      './assets/img/background-m.png',
      './assets/img/background.png',
      './assets/img/bg-ajuda-creditos.png',
      './assets/img/bg-menu.png',
      './assets/img/bg-titulo.png',
      './assets/img/bg_ajuda.png',
      './assets/img/botoes-menu.png',
      './assets/img/btn-restart.png',
      './assets/img/fechar.png',
      './assets/img/img-ajuda.png',
      './assets/img/img-titulo.png',
      './assets/img/logo-colecao.svg',
      './assets/img/logo-ebsa.svg',
      './assets/img/play-button.svg',
      './assets/img/rotate-right.png'      
    );
    
    this._oed = document.querySelector('#oed');
    this._selectDevice = this.selectDevice();
    window.onresize = ()=> this.selectDevice();
    
    this._src.forEach(imagem => {
      let img = new Image();
      img.src = imagem;
    });
    this._oed.innerHTML += "<div class='preloader'><div class='loading'></div></div>"
    window.onload = ()=>{
      this._template = new CapaTemplate();
      let preloader = document.querySelector('.preloader');
      this._oed.removeChild(preloader);
    }
  }
  adjustLargerScreen() {
    let elemento = this._oed;
   elemento.style.display = "block";

    if(elemento.classList.contains('mobile-service')) elemento.classList.remove('mobile-service');
  
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
  adjustMobileScreen(){
    let elemento = this._oed;
    elemento.style.display = "block";
    if(!elemento.classList.contains('mobile-service')){
      elemento.style.removeProperty('transform');
      elemento.style.removeProperty('left');
      elemento.style.removeProperty('top');
      elemento.classList.add('mobile-service');
    }
  };
  selectDevice(){
    let deviceAgent = navigator.userAgent.toLowerCase();
    let isTouchDevice = Modernizr.touch || (deviceAgent.match(/(iphone|ipod)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i));

    if(isTouchDevice){
      this.adjustMobileScreen();
    }else{
      this.adjustLargerScreen();
    };
  }
  ajuda(texto){
    this._template.mudarTextoAjuda(texto);
  }
}