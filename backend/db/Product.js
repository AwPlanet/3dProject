const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    header:String,
    subheader:String,
    banner:String
})

module.exports = mongoose.model("products", productSchema);


