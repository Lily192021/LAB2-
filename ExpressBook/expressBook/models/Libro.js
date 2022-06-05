const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LibroSchema = new Schema({
    isbn:String(id),
    titulodellibro:String,
    anodellibro:Integer,
    nombredelautor:String,
    address:String,
})

const Libro_data = mongoose.model('libro',LibroSchema)

module.exports = Libro_data