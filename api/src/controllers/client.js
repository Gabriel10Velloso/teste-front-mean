module.exports = (app) => {

  let clients = require('../../db/clients.mock');

  const api = {};

  /** Get all clients */
  api.getAll = (req, res, next) => {
    if (!clients) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }
    res.json(clients);
  };

  /** Get clients by name */
  api.getByName = (req, res, next) => {
    const nameID = req.params.name;

    const foundClientName = clients.filter(clientName => clientName.name.toLowerCase().includes(nameID.toLowerCase()));

    if (!clients || foundClientName.length == 0) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }

    res.json(foundClientName);
  };

  /** Get general totals */
  api.getTotal = (req, res, next) => {
    let totalProperties = 0;
    let totalEnterprises = 0;
    var clientTotal = 0;

    if (!clients) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }

    for (let i in clients) {
      clientTotal++;
    }

    for (let client of clients) {
      client.enterprises.forEach((val, index) => {
        totalProperties += Number(val.realties);
        totalEnterprises++;
      });
    }

    res.json({
      clientTotal: clientTotal,
      properties: totalProperties,
      enterprises: totalEnterprises,
    });
  };

  /** Get a client by _id */
  api.getClientId = (req, res, next) => {
    const client_id = String(req.params._id);

    const foundClientId = clients.filter(clientId => clientId._id.toLowerCase().includes(client_id.toLowerCase()));

    if (!clients || foundClientId === undefined) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }

    res.json(foundClientId);
  };

  /** Get client totals */
  api.getClientIdTotal = (req, res, next) => {
    const client_id = req.params['client_id'];
    let totalProperties = 0;
    let totalEnterprises = 0;

    const foundClientId = clients.find((clientId) => clientId._id === client_id);

    foundClientId.enterprises.forEach((val, index) => {
      totalProperties += Number(val.realties);
      totalEnterprises++;
    });

    res.json({
      properties: totalProperties,
      enterprises: totalEnterprises,
    });
  };

  /** Get all enterprises by client */
  api.getClientIdEmterprise = (req, res, next) => {
    const client_id = req.params['client_id'];
    const foundClientId = clients.find((clientId) => clientId._id === client_id);

    if (!clients || foundClientId === undefined) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }

    res.json(foundClientId);
  };


  /** Get enterprises by client and name */
  api.getEmterprisesClientId = (req, res, next) => {
    let paramsName = req.params.name;
    let paramsId = String(req.params.client_id);

    let foundClientName;
    let foundClientId;

    if (paramsId !== 'É número' && paramsName === 'É número') {
      foundClientId = clients.filter(clientId => clientId._id.toLowerCase().includes(paramsId.toLowerCase()));
      if (!clients || foundClientId.length == 0) {
        res.status(404).json('Cliente não encontrado.');
        return;
      }
      return res.json(foundClientId);
    } else if (paramsId === 'É string' && paramsName !== 'É string') {
      foundClientName = clients.filter(clientName => clientName.name.toLowerCase().includes(paramsName.toLowerCase()));
      if (!clients || foundClientName.length == 0) {
        res.status(404).json('Cliente não encontrado.');
        return;
      }
      return res.json(foundClientName);
    }

    // foundClientId = clients.find((clientId) => clientId._id === paramsId);
    // return res.json(foundClientId);
  };






  return api;
};