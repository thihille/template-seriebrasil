class CapaTemplate {
  constructor(){
    this._configuracoesTemplate = ConfigTemplate;
    this._configuracoesAutores = AutoresDaColecao;
    this._configuracoesCreditos = MeusCreditos;
    this._dataTemplate = [];
    this._dataTemplate.push(this._configuracoesTemplate);
    this._dataTemplate.push(this._configuracoesAutores);
    this._dataTemplate.push(this._configuracoesCreditos);
    this._controller = new CapaController(this._dataTemplate);
  }
  mudarTextoAjuda(texto){
    return this._controller.janelaAjuda(texto);
  }
}