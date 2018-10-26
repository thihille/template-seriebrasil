class Navegacao extends View {
  
  constructor(elemento){
    super(elemento);
  }
  template(model){
    console.log(model);
    // let infoOed = model[0];
    // let infoOedAutores = model[1];
    
    // let introOed = infoOed.abertura ? '<div class="abertura playAbertura"></div>' : '';
    // return `
    // <div id="capa">
    //   ${introOed}
    //   <div class="materia-oed">
    //     <h1>Produção</h1>
    //     <h2>de texto</h2>
    //   </div>
    //   <div class="autores-oed">
    //     ${
    //       infoOedAutores.map((n)=> `
    //       <p>${n.nome}</p>
    //     `).join('')
    //     }
    //   </div>
    //   <h1 class="titulo-oed">${infoOed.titulo}</h1>
    //   <div class="btn-start-oed"></div>
    //   <div class="${infoOed.caracterizado ? 'logo-ebsa' : ''}"></div>
    //   <div class="${infoOed.caracterizado ? 'logo-colecao' : ''}"></div>
    // </div>
    // `;
  }
}