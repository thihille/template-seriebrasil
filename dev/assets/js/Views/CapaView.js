class CapaView extends View {
  
  constructor(elemento){
    super(elemento);
  }
  template(model){
    let infoOed = model[0];
    let infoOedAutores = model[1];
    let infoCreditos = model[2];
    let creditos = '';
    let classTituloOed = ''
    if(infoOed.titulo.length < 15){
      classTituloOed = 'titulo-pequeno';
    }else if(infoOed.titulo.length >= 16 && infoOed.titulo.length < 30){
      classTituloOed = 'titulo-medio';
    }else{
      classTituloOed = 'titulo-grande';
    };
    infoCreditos.forEach(function(o) {
      for ( var c in o )
          if(o[c]) creditos += ('<span class="titulo_credito">'+c +': </span><span class="nome_autor">'+o[c]+'</span>');
    });
    let introOed = infoOed.abertura ? '<div class="abertura playAbertura"></div>' : '';
    return `
    <div id="capa">
      ${introOed}
      <div class="materia-oed">
        <h1>Produção</h1>
        <h2>de texto</h2>
      </div>
      <div class="autores-oed">
        ${
          infoOedAutores.map((n)=> `
          <p>${n.nome}</p>
        `).join('')
        }
      </div>
      <h1 class="titulo-oed ${classTituloOed}">${infoOed.titulo}</h1>
      <div class="btn-start-oed"></div>
      <div class="${infoOed.caracterizado ? 'logo-ebsa' : ''}"></div>
      <div class="${infoOed.caracterizado ? 'logo-colecao' : ''}"></div>
    </div>
    <div id="nav-oed">
      <div class="btn-creditos btn-ativo"></div>
      <div class="btn-ajuda btn-ativo"></div>
      <div class="nav-anterior disable"></div>
      <div class="nav-proximo"></div></div>
    </div>
    <h1 class="titulo-oed-prod ${classTituloOed}">${infoOed.titulo}</h1>
    <div class="nav-restart disable">Reiniciar</div>
    <div id="oed-creditos" class="creditos-oculto">
      <div class="btn-creditos"></div>
      <div class="conteudo">
        <h3>Créditos</h3>
        <div class="conteudo-creditos">
          <p>
            ${creditos}
          </p>
        </div>
      </div>
    </div>
    <div id="oed-ajuda" class="ajuda-oculta"><div class="btn-ajuda"></div><div class="conteudo">
      <h3>Ajuda</h3>
        <div class="conteudo-ajuda">
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-avancar.png" width="auto" height="30" alt="Botao de navegação - Avançar"> Avançar para a próxima tela.<br>
          </p>
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-voltar.png" width="auto" height="30" alt="Botao de navegação - Voltar"> Retornar à tela anterior.<br>
          </p>
          <p style="padding:10px 0;">
            <img src="./assets/img/ajuda-fechar.png" width="auto" height="30" alt="Botao de navegação - Voltar"> Ocultar caixa de texto.<br>
          </p>
        </div>
      </div>
    </div>
    `;
    
  }
}