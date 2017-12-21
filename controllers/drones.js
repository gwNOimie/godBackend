const droneModel = require('../models/drone');

module.exports = {
  getList: (req, res, next) => {
    droneModel.getList().then((result) => {
      res.send(result)
    }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
  },
  getItem: (req, res, next) => {
    droneModel.getItem().then((result) => {
      res.send(result)
    }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
  },
  addItem: (req, res, next) => {
    droneModel.addItem().then((result) => {
      res.send(result)
    }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
  },
  updateItem: (req, res, next) => {
    droneModel.updateItem().then((result) => {
      res.send(result)
    }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
  },
  deleteItem: (req, res, next) => {
    droneModel.deleteItem().then((result) => {
      res.send(result)
    }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
  }
}
