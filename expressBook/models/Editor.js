const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schema = new Schema({
    name:String,
    address:String,
    fullname:String,
})  

    

const Editorcontrol_data = mongoose.model('Editor',EditorSchema)

module.exports = Editorcontrol_data