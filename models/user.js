const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    password: { type: String, required: true },
    usertype_id: { type: String, required: true },
},
{ timestamps: true,versionKey: false

}
);

const user = mongoose.model('user', UserSchema);
module.exports = user;