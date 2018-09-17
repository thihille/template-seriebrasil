let ObjetoEducacional = ()=> {
//Start code OED  

  let estruturaAjuda = `
  <h2>Instrucões:</h2>
  <p>
    Descrição da instruções do <strong>Objeto Educacional</strong>.<br/>
    Pode inserir <u>html</u> para variar as intruções de cada OED.
  </p>
  `;
  let ajudaOed = new Ajuda();
      ajudaOed.data('Titulo',estruturaAjuda);

  let navOed = new Navegacao('slide');
      // navOed.disableNext();
      // navOed.disablePrevious();
      // navOed.enableNext();
      // navOed.enablePrevious();
  
  setTimeout(function(){
    navOed.disableNext();
  },2000);
  setTimeout(function(){
    navOed.enableNext();
  },3000);

    





//End code OED
}