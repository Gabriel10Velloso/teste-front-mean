module.exports = (app) => {

  const Client = app.controllers.client;

  /** Get all clients */
  app.route('/')
     .get(Client.getAll);

  /** Get clients by name */
  app.route('/name/:name')
     .get(Client.getByName);

  /** Get general totals */
  app.route('/totals')
     .get(Client.getTotal);

  /** Get a client by _id */
  app.route('/:_id')
     .get(Client.getClientId);

  /** Get client totals */
  app.route('/:client_id/totals')
     .get(Client.getClientIdTotal);

  /** Get all enterprises by client */
  app.route('/:client_id/enterprise')
     .get(Client.getClientIdEmterprise);

  /** Get enterprises by client and name */
  app.route('/:client_id/enterprise/name/:name')
    .get(Client.getEmterprisesClientId);


};
