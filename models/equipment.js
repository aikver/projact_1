const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    img: { type: String, required: true },
    num: { type: String, required: true },
    status: { type: String, required: true },
    
},
{ timestamps: true,versionKey: false

}
);

const equipment  = mongoose.model('equipment ', equipmentSchema);
module.exports = equipment ;