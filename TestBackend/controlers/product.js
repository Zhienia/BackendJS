const db = require('../db');
const url = require('url');

module.exports.createProduct = function(req, res) {

    const { time, title, price, image, id_user } = req.body;
    const filter = [time, title, price, image, id_user];

    const sql = "insert into testgal.product(time, title, price, image, id_user) values(?, ?, ?, ?, ?)";

    db.query(sql, filter,  function(err, results) {
        if (err) {
            res.status(401).json({
                error: {
                    error: "There is error"
                }
            });
        } else if (results != 0) {
            res.status(200).json({
                message: {
                    message: "Product created"
                }
            });
        } else {
            res.status(401).json({
                message: {
                    message: "Product didn`t create"
                }
            });
        }
    });
}

module.exports.changeProduct = function(req, res) {

    const { id, time, title, price, image, id_user } = req.body;
    const filter = [time, title, price, image, id, id_user];

    const sql = "update testgal.product set time = ?, title = ?, price = ?, image = ? where id = ? and id_user = ?";

    db.query(sql, filter,  function(err, results) {
        if (err) {
            res.status(401).json({
                error: {
                    eroor: "There is error"
                }
            });
        } else if (results != 0) {
            res.status(200).json({
                message: {
                    message: "Product was change"
                }
            });
        } else {
            res.status(401).json({
                message: {
                    message: "Product didn`t change"
                }
            });
        }
    });
}

module.exports.deleteProduct = function(req, res) {

    const { id, id_user } = req.body;
    const filter = [id, id_user];

    const sql = "delete from testgal.product where id = ? and id_user = ?";

    db.query(sql, filter,  function(err, results) {
        if (err) {
            res.status(401).json({
                error: {
                    eroor: "There is error"
                }
            });
        } else if (results != 0) {
            res.status(200).json({
                message: {
                    message: "Product was delete"
                }
            });
        } else {
            res.status(401).json({
                message: {
                    message: "Product didn`t find"
                }
            });
        }
    });
}

module.exports.downloadImage = function(req, res) {

    console.log(req.body);
}
