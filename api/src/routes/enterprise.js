module.exports = (app) => {

  let Enterprises = app.controllers.enterprise;

  /**OBS: Tive que colocar /enterprise/enterprises 
   * A rota app.route('/:_id') ficou conflitante
   * Se eu adicionar /enterprise -- vai entrar como sendo um ID retornando vazio
   * ---------------------- // -----------------
   * Segui a orientação do Git,
   * Requisitar informações do endpoint get("/:_id");
   * Requisitar o endpoint get("/name/:name") ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
   * Acho que uma rota get("/name/:_id"); atenderia as necessidades, isso me confundiu um pouco
  */
  // app.route('/:_id').get(Client.getClientId);

   /** Get all enterprises */
  app.route('/enterprise/enterprises')
     .get(Enterprises.getAllEnterprises);

};

