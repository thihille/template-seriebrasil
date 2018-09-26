'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = function () {
  function Template() {
    var _this = this;

    _classCallCheck(this, Template);

    //ConfigJS
    this._abertura = ConfigTemplate.abertura;
    this._caracterizado = ConfigTemplate.caracterizado;

    //TemplateJS
    this._titulo = ConfigTemplate.titulo;
    this._creditosCapa = AutoresDaColecao;
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#producao');

    this.createTemplate();
    this._selectDevice = this.selectDevice();

    window.onresize = function () {
      return _this.selectDevice();
    };
    new Creditos();
  }

  _createClass(Template, [{
    key: 'createTemplate',
    value: function createTemplate() {
      var materia = document.createElement('div');
      materia.setAttribute('class', 'materia-oed');

      var tituloMateria = document.createElement('h1');
      tituloMateria.innerHTML = "Produção";

      var subTituloMateria = document.createElement('h2');
      subTituloMateria.innerHTML = "de texto";

      var creditosCapa = document.createElement('div');
      creditosCapa.setAttribute('class', 'autores-oed');

      this._creditosCapa.forEach(function (objeto) {
        for (var autor in objeto) {
          creditosCapa.innerHTML += '<p>' + objeto[autor] + '</p>';
        }
      });

      var titulo = document.createElement('h1');
      titulo.setAttribute('class', 'titulo-oed');

      var tituloInterno = document.createElement('h1');
      tituloInterno.setAttribute('class', 'titulo-oed');

      var botaoStart = document.createElement('div');
      botaoStart.setAttribute('class', 'btn-start-oed');

      var navOed = document.createElement('div');
      navOed.setAttribute('id', 'nav-oed');

      var logoEbsa = document.createElement('div');
      logoEbsa.setAttribute('class', 'logo-ebsa');

      var logoColecao = document.createElement('div');
      logoColecao.setAttribute('class', 'logo-colecao');

      titulo.innerHTML = this._titulo;
      tituloInterno.innerHTML = this._titulo;

      this._window.childNodes[1].appendChild(materia);
      materia.appendChild(tituloMateria);
      materia.appendChild(subTituloMateria);

      this._window.childNodes[1].appendChild(creditosCapa);
      this._window.childNodes[1].appendChild(titulo);
      this._window.childNodes[1].appendChild(botaoStart);
      this._window.childNodes[1].appendChild(logoEbsa);
      this._window.childNodes[1].appendChild(logoColecao);
      this._producao.appendChild(navOed);
      this._producao.appendChild(tituloInterno);

      var iniciaOed = function iniciaOed() {
        var capa = document.querySelector("#capa");
        capa.classList.add("animated", "zoomOutLeft");
        capa.addEventListener("animationend", function () {
          this.style.display = "none";
          this.classList.remove("animated", "zoomOutLeft");
        }, false);
        ObjetoEducacional();
      };
      botaoStart.addEventListener('click', iniciaOed);
    }
  }, {
    key: 'adjustLargerScreen',
    value: function adjustLargerScreen() {
      var elemento = this._window;

      var getOed = document.querySelector("#oed");
      if (getOed.classList.contains('mobile-service')) getOed.classList.remove('mobile-service');

      var larguraJanela = window.innerWidth;
      var alturaJanela = window.innerHeight;
      var larguraInicialElemento = 1024;
      var alturaInicialElemento = 660;
      var alturaRedimensionada = void 0;
      var larguraRedimensionada = void 0;
      var escalaLargura = void 0;
      var escalaAltura = void 0;

      var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

      if (alturaJanela <= larguraJanela) {
        alturaRedimensionada = alturaJanela;
        larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
        if (larguraJanela < larguraRedimensionada) {
          alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
          larguraRedimensionada = larguraJanela;
        }
      } else {
        larguraRedimensionada = larguraJanela;
        alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
      }

      escalaLargura = larguraRedimensionada / larguraInicialElemento * 100 / 100.1;
      escalaAltura = alturaRedimensionada / alturaInicialElemento * 100 / 100.1;
      if (escalaLargura > 0.91 && escalaLargura <= 1) {
        elemento.style.transform = 'scale(.9)';
        elemento.style.OTransform = 'scale(.9)';
        elemento.style.msTransform = 'scale(.9)';
        elemento.style.MozTransform = 'scale(.9)';
        elemento.style.WebkitTransform = 'scale(.9)';
      } else if (escalaLargura > 0.81 && escalaLargura <= 0.9) {
        elemento.style.transform = 'scale(.8)';
        elemento.style.OTransform = 'scale(.8)';
        elemento.style.msTransform = 'scale(.8)';
        elemento.style.MozTransform = 'scale(.8)';
        elemento.style.WebkitTransform = 'scale(.8)';
      } else if (escalaLargura <= 0.809) {
        elemento.style.transform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
        elemento.style.OTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
        elemento.style.msTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
        elemento.style.MozTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
        elemento.style.WebkitTransform = 'scale(' + escalaLargura + ',' + escalaAltura + ')';
      } else {
        elemento.style.transform = 'scale(1)';
        elemento.style.OTransform = 'scale(1)';
        elemento.style.msTransform = 'scale(1)';
        elemento.style.MozTransform = 'scale(1)';
        elemento.style.WebkitTransform = 'scale(1)';
      }
      var larguraDocumento = window.innerWidth;
      var alturaDocumento = window.innerHeight;

      elemento.style.left = larguraDocumento / 2 - 1024 / 2 + 'px';
      elemento.style.top = alturaDocumento / 2 - 660 / 2 + 'px';
    }
  }, {
    key: 'adjustMobileScreen',
    value: function adjustMobileScreen() {
      var getOed = document.querySelector("#oed");
      if (!getOed.classList.contains('mobile-service')) {
        getOed.style.removeProperty('transform');
        getOed.style.removeProperty('left');
        getOed.style.removeProperty('top');
        getOed.classList.add('mobile-service');
      }
    }
  }, {
    key: 'selectDevice',
    value: function selectDevice() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      var isTouchDevice = Modernizr.touch || deviceAgent.match(/(iphone|ipod)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i);

      if (isTouchDevice) {
        this.adjustMobileScreen();
      } else {
        this.adjustLargerScreen();
      };
    }
  }]);

  return Template;
}();

var Ajuda = function () {
  function Ajuda(titulo, html) {
    _classCallCheck(this, Ajuda);

    this._titulo = titulo;
    this._html = html;
    this._ajuda = document.createElement('div');
    this._ajuda.setAttribute('id', 'oed-ajuda');
    this._ajuda.setAttribute('class', 'ajuda-oculta');
    this._ajudaContainer = document.createElement('div');
    this._ajudaContainer.setAttribute('class', 'conteudo');
    this._buttonAjuda = document.createElement('div');
    this._buttonAjuda.setAttribute('class', 'btn-ajuda');
    // this._buttonAjuda.innerHTML = 'Fechar Ajuda';
    this._buttonAjudaProducao = document.createElement('div');
    this._buttonAjudaProducao.setAttribute('class', 'btn-ajuda btn-ativo');
    // this._buttonAjudaProducao.innerHTML = 'Ajuda';
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#nav-oed');
    this.createWindow();
  }

  _createClass(Ajuda, [{
    key: 'createWindow',
    value: function createWindow() {
      var _this2 = this;

      this._window.appendChild(this._ajuda);
      this._ajuda.appendChild(this._buttonAjuda);
      this._ajuda.appendChild(this._ajudaContainer);
      this._producao.appendChild(this._buttonAjudaProducao);

      var janela = document.querySelector('#oed-ajuda');
      var verificaJanela = function verificaJanela() {
        if (janela.classList.contains('ajuda-aberta')) {
          janela.classList.remove('ajuda-aberta');
          janela.classList.add('ajuda-oculta');
        } else if (janela.classList.contains('ajuda-oculta')) {
          _this2.verificaCreditos();
          janela.classList.remove('ajuda-oculta');
          janela.classList.add('ajuda-aberta');
        }
      };
      this.data();
      setTimeout(function () {
        var botoesAjuda = document.querySelectorAll('.btn-ajuda');
        botoesAjuda.forEach(function (btn) {
          btn.addEventListener('click', verificaJanela);
        });
      }, 200);
    }
  }, {
    key: 'data',
    value: function data(titulo, html) {
      var layout = void 0;
      if (titulo && html) {
        layout = '\n        <h3>' + titulo + '</h3>\n        <div class="conteudo-ajuda">\n          ' + html + '\n        </div>\n      ';
      } else {
        layout = '\n        <h3>Ajuda</h3>\n        <div class="conteudo-ajuda">\n          <p style="padding:10px 0;">\n            <img src="./assets/img/ajuda-avancar.png" width="auto" height="30" alt="Botao de navega\xE7\xE3o - Avan\xE7ar" /> Avan\xE7ar para a pr\xF3xima tela.<br/>\n          </p>\n          <p style="padding:10px 0;">\n            <img src="./assets/img/ajuda-voltar.png" width="auto" height="30" alt="Botao de navega\xE7\xE3o - Voltar" /> Retornar \xE0 tela anterior.<br/>\n          </p>\n          <p style="padding:10px 0;">\n            <img src="./assets/img/ajuda-fechar.png" width="auto" height="30" alt="Botao de navega\xE7\xE3o - Voltar" /> Ocultar caixa de texto.<br/>\n          </p>\n        </div>\n      ';
      }
      this._ajudaContainer.innerHTML = layout;
    }
  }, {
    key: 'verificaCreditos',
    value: function verificaCreditos() {
      var janela = document.querySelector('#oed-creditos');
      if (janela.classList.contains('creditos-aberta')) {
        janela.classList.remove('creditos-aberta');
        janela.classList.add('creditos-oculto');
      }
    }
  }]);

  return Ajuda;
}();

var Creditos = function () {
  function Creditos(titulo, html) {
    _classCallCheck(this, Creditos);

    this._arrayCreditos = MeusCreditos;
    this._creditos = document.createElement('div');
    this._creditos.setAttribute('id', 'oed-creditos');
    this._creditos.setAttribute('class', 'creditos-oculto');
    this._creditosContainer = document.createElement('div');
    this._creditosContainer.setAttribute('class', 'conteudo');
    this._buttonCreditos = document.createElement('div');
    this._buttonCreditos.setAttribute('class', 'btn-creditos');
    // this._buttonCreditos.innerHTML = 'Fechar Créditos';
    this._buttonCreditosProducao = document.createElement('div');
    this._buttonCreditosProducao.setAttribute('class', 'btn-creditos btn-ativo');
    // this._buttonCreditosProducao.innerHTML = 'Créditos';
    this._window = document.querySelector('#oed');
    this._producao = document.querySelector('#nav-oed');
    this.createWindow();
    this.data('Créditos', this._arrayCreditos);
  }

  _createClass(Creditos, [{
    key: 'createWindow',
    value: function createWindow() {
      var _this3 = this;

      this._window.appendChild(this._creditos);
      this._creditos.appendChild(this._buttonCreditos);
      this._creditos.appendChild(this._creditosContainer);
      this._producao.appendChild(this._buttonCreditosProducao);

      var janela = document.querySelector('#oed-creditos');
      var verificaJanela = function verificaJanela() {
        if (janela.classList.contains('creditos-aberta')) {
          janela.classList.remove('creditos-aberta');
          janela.classList.add('creditos-oculto');
        } else if (janela.classList.contains('creditos-oculto')) {
          _this3.verificaAjuda();
          janela.classList.remove('creditos-oculto');
          janela.classList.add('creditos-aberta');
        }
      };

      setTimeout(function () {
        var botoesCredito = document.querySelectorAll('.btn-creditos');
        botoesCredito.forEach(function (btn) {
          btn.addEventListener('click', verificaJanela);
        });
      }, 200);
    }
  }, {
    key: 'data',
    value: function data(titulo, arrayCreditos) {
      var autores = '';
      arrayCreditos.forEach(function (objeto) {
        for (var chave in objeto) {
          if (objeto[chave]) autores += '<span class="titulo_credito">' + chave + ': </span><span class="nome_autor">' + objeto[chave] + '</span>';
        }
      });

      var layout = '\n      <h3>' + titulo + '</h3>\n      <div class="conteudo-ajuda">\n        <p>' + autores + '</p>\n      </div>\n    ';
      this._creditosContainer.innerHTML = layout;
    }
  }, {
    key: 'verificaAjuda',
    value: function verificaAjuda() {
      var janela = document.querySelector('#oed-ajuda');
      if (janela.classList.contains('ajuda-aberta')) {
        janela.classList.remove('ajuda-aberta');
        janela.classList.add('ajuda-oculta');
      }
    }
  }]);

  return Creditos;
}();

var Navegacao = function () {
  function Navegacao(minhaClass) {
    _classCallCheck(this, Navegacao);

    this._nav = minhaClass;

    this._navSlideAnterior = document.createElement('div');
    this._navSlideAnterior.setAttribute('class', 'nav-anterior disable');
    // this._navSlideAnterior.innerHTML = "Voltar";
    this._navSlideProximo = document.createElement('div');
    this._navSlideProximo.setAttribute('class', 'nav-proximo');
    // this._navSlideProximo.innerHTML = "Próximo";

    this._navSlideAnteriorEnable = false;
    this._navSlideProximoEnable = true;

    this._janelasSlides = document.querySelectorAll('.janela-slide');
    this._qtdSlide = this._janelasSlides.length;
    this._nPages = 1;

    this._producao = document.querySelector('#nav-oed');
    this._disablePrev = false;
    this._disableNext = false;
    this.createNav();
  }

  _createClass(Navegacao, [{
    key: 'createNav',
    value: function createNav() {
      this._producao.appendChild(this._navSlideAnterior);
      this._producao.appendChild(this._navSlideProximo);

      var total_paginas = this._qtdSlide;
      var pagina_atual = 1;

      var btnAnterior = document.querySelector('.nav-anterior');
      var btnProximo = document.querySelector('.nav-proximo');

      this._navSlideAnterior.addEventListener('click', function () {
        if (!btnAnterior.classList.contains('disable')) {
          if (pagina_atual >= 1) {
            for (var x = 0; x < total_paginas; x++) {
              document.querySelectorAll('.janela-slide')[x].style.display = 'none';
            }
            pagina_atual--;
            document.querySelectorAll('.janela-slide')[pagina_atual - 1].style.display = 'block';
            if (!btnProximo.classList.contains('off')) document.querySelector('.nav-proximo').classList.remove('disable');
            if (pagina_atual == 1) document.querySelector('.nav-anterior').classList.add('disable');
          }
        }
      });

      this._navSlideProximo.addEventListener('click', function () {

        if (!btnProximo.classList.contains('disable')) {
          if (pagina_atual < total_paginas) {
            for (var x = 0; x < total_paginas; x++) {
              document.querySelectorAll('.janela-slide')[x].style.display = 'none';
            }
            document.querySelectorAll('.janela-slide')[pagina_atual].style.display = 'block';
            pagina_atual++;

            if (!btnAnterior.classList.contains('off')) document.querySelector('.nav-anterior').classList.remove('disable');
            if (pagina_atual == total_paginas) document.querySelector('.nav-proximo').classList.add('disable');
          }
        }
      });
    }
  }, {
    key: 'desabilitarAnterior',
    value: function desabilitarAnterior() {
      document.querySelector('.nav-anterior').classList.add('disable', 'off');
    }
  }, {
    key: 'desabilitarProximo',
    value: function desabilitarProximo() {
      document.querySelector('.nav-proximo').classList.add('disable', 'off');
    }
  }, {
    key: 'habilitarAnterior',
    value: function habilitarAnterior() {
      document.querySelector('.nav-anterior').classList.remove('disable', 'off');
    }
  }, {
    key: 'habilitarProximo',
    value: function habilitarProximo() {
      document.querySelector('.nav-proximo').classList.remove('disable', 'off');
    }
  }]);

  return Navegacao;
}();

var app = new Template();
var oedAjuda = new Ajuda();
var navegacaoOed = new Navegacao('slide');