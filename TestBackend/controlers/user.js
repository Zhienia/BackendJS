const db = require('../db');
const url = require('url');

module.exports.login = function(req, res) {

    const {email, password} = req.body;
    const filter = [email, password];

    const sql = "select * from testgal.users where email = ? and password = ?";
    db.query(sql, filter,  function(err, results) {
            if (err) {
                res.status(401).json({
                    error: {
                        eroor: "There is error"
                    }
                });
            } else if (results != 0) {
                console.log(results);
                res.status(200).json({
                    message:{
                        message: "Welcome to the sistem"
                    } 
                });
            } else {
                res.status(422).json({
                    message:{
                        message: "Wrong email or password"
                    } 
                });
            }
    });
}

module.exports.register = function(req, res) {

    const {email} = req.body;
    const filterFirst = [email];

    const {phone, name, password} = req.body;
    const filter = [phone, name, email, password];

    const sql = "select * from testgal.users where email = ?";
    const sqlRegister = "insert into testgal.users(phone, name, email, password) values(?, ?, ?, ?)";
    db.query(sql, filterFirst,  function(err, results) {
        if (err) {
            res.status(401).json({
                error: {
                    eroor: "There is error"
                }
            });
        } else if (results != 0) {
            res.status(205).json({
                user: {
                    message: "User with this email there is in dataBase"
                }
            });
        } else {
            db.query(sqlRegister, filter, function(err, result){
                if (err) {
                    res.status(422).json({
                        register: {
                            register: "Register was bad"
                        }
                    });
                } else {
                    res.status(200).json({
                        register: {
                            register: "Register was good"
                        }
                    });
                }
            });
        }
    });
}

module.exports.takeInformationUser = function(req, res) {

    const idUserFromURL = url.parse(req.url, true);

    const idUserForDb = idUserFromURL.query.id;

    const filter = [idUserForDb, idUserForDb];

    const sql = "select * from testgal.users join testgal.product ON testgal.users.id = testgal.product.id_user where testgal.users.id = ? and testgal.product.id_user = ?";

    db.query(sql, filter,  function(err, results) {
        if (err) {
            res.status(401).json({
                error: {
                    eroor: "There is error"
                }
            });
        } else if (results != 0) {
            res.status(200).json({
                answer: {
                    userInformation: results[0]
                }
            });
        } else {
            res.status(401).json({
                error: {
                    message: "Not information about user"
                }
            });
        }
    });
}