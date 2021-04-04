module.exports = (app) => {

  let clients = require('../../db/clients.mock');

  const api = {};

  /** Get all enterprises */
  api.getAllEnterprises = (req, res, next) => {
    let newObj = [];
    let obj;
    let totalProperties = 0;
    let totalEnterprises = 0;

    if (!clients) {
      res.status(404).json('Cliente não encontrado.');
      return next();
    }

    for (let client of clients) {
      for (let enterprise of client.enterprises) {
        totalProperties += Number(enterprise.realties);
        totalEnterprises++;
        obj = {
          _id: client._id,
          name: client.name,
          image_src: client.image_src,
          enterprisesTotal: totalProperties,
          propertiesTotal: totalEnterprises,
          enterprises: [
            {
              _id: enterprise._id,
              name: enterprise.name,
              image_src: enterprise.image_src,
              realties: enterprise.realties,
            }
          ]
        };
      }
      newObj.push(obj);
      totalProperties = 0;
      totalEnterprises = 0;
    }

    res.json(newObj);
  };



  return api;
};
