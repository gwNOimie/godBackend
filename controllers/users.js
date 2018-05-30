var bcrypt = require('bcrypt');

const userModel = require('../models/users');

module.exports = {

    getList: (req, res, next) => {
        userModel.getList().then((result) => {
            res.send(result)
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    },

    getUser: (req, res, next) => {
        userModel.getUser(req.params.id).then((result) => {
            res.send(result)
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    },

    search: (req, res, next) => {
        //todo last
    },

    addUser: (req, res, next) => {
        let item = req.body;

        bcrypt.hash(item.password, 10).then((hash) => {
            item.password = hash;

            userModel.addUser(item).then((result) => {
                res.send(result)
            }).catch((error) => {
                console.log(error);
                res.status(500).send(error);
            })
        });
    },

    updateUser: (req, res, next) => {
        if (req.body.password) {
            bcrypt.hash(item.password, 10).then((hash) => {
                item.password = hash;

                userModel.updateUser(item).then((result) => {
                    res.send(result)
                }).catch((error) => {
                    console.log(error);
                    res.status(500).send(error);
                })
            });
            return;
        }
        userModel.updateUser(req.params.id, req.body).then((result) => {
            res.send(result)
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    },

    deleteUser: (req, res, next) => {
        userModel.deleteUser(req.params.id).then((result) => {
            res.send(result)
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    },

    changeGear: (req, res, next) => {
        userModel.changeGear(req.params.id, req.body).then((result) => {
            res.send(result)
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    }
};
