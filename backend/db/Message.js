const mongoose= require('mongoose');

const messageSchema= new mongoose.Schema({
    email:String,
    message:String,
    status:String
})

module.exports = mongoose.model("messages", messageSchema);


