const express = require("express")
const Product = require("../models/product")

exports.getProduct = async(req,res) => {
    try{
        const Product = await Product.find();
        res.status(200).json(Product);

    } catch(error){
        res.status(500).json({Message:error.Message});

    }

    const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
wrRoute.post('/user', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.password).digest('hex');

    connection.execute(`INSERT INTO user
     (id,username,surname,email, tel,,, password, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?,?,?);`, [req.body.id, req.body.username,req.body.surname, req.body.email,req.body.tel, mypass, currentDateTime, currentDateTime])
        .then(() => {
            console.log('ok');
            res.status(201).send('registation Successful!')
        }).catch((err) => {
            console.log(err);
            res.end();
        });

});

}
