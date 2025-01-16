// create a simple model for user
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
      name: {
type: String,
required:true,
},
email: {
    type: String,
    required:true,
    unique: true
},
password: {
    type: String,
    required: true
},
});
module.exports = mongoose.model('User', userSchema);