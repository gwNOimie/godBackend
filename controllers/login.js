const userModel = require('../models/users');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
//var jwt = require('jwt'), payload = {
//        scope: 'client:outgoing?clientName=matt',
//        iss: 'APP_SID',
//        expires: Math.round((new Date().getTime()/1000)) + 3600
//    },
//    token = new jwt.WebToken(JSON.stringify(payload), JSON.stringify({typ:'JWT', alg:'HS256'}));

module.exports = {

    getConnectedUser: (req, res, next) => {

        userModel.getUserByName(req.body.name).then(result => {
            console.log(result);

            if (result.length > 0) {
                let user = result[0];
                let storedPassword = user.password;
                let sendPassword = req.body.password;

                console.log(storedPassword);
                console.log(sendPassword);

                bcrypt.compare(sendPassword, storedPassword).then((isSame) => {
                    console.log("compare");
                    if (isSame) {
                        crypto.randomBytes(48, (err, buffer) => {
                            if (err) {
                                res.send(err);
                            }
                            res.send("token : " + buffer.toString('hex'));
                        });
                    } else {
                        res.status(500).send("Email or password dismatch");
                    }
                });

            } else {
                res.status(500).send("Email or password dismatch")
            }

        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    }
};