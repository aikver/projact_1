const express = require("express")
const Product = require("../models/equipment")

exports.getequipment = async(req,res) => {
    try{
        const Equipment = await Equipment.find();
        res.status(200).json(Equipment);

    } catch(error){
        res.status(500).json({Message:error.Message});

    }

    const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
wrRoute.post('/user', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.password).digest('hex');

    connection.execute(`INSERT INTO user
     (id,name,img,num, satus)
     VALUES (?, ?, ?, ?, ?);`, [req.body.id, req.body.name,req.body.img, req.body.num,req.body.satus, mypass, currentDateTime, currentDateTime])
        .then(() => {
            console.log('ok');
            res.status(201).send('registation Successful!')
        }).catch((err) => {
            console.log(err);
            res.end();
        });

});
exports.updateEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await Equipment.findById(id);
        if (!equipment) return res.status(404).json({ message: 'equipment not found' });
        const update = req.body;
        Object.assign(equipment, update);
        const updatedEquipment = await equipment.save();
        res.json(updatedEquipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await Equipment.findById(id);
        if (!equipment) return res.status(404).json({ message: 'equipment not found' });
        await Equipment.findByIdAndDelete(id);
        res.json({ message: 'equipment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

}
