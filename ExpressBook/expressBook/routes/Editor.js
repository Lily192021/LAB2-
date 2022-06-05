const express = require('express')
const mongoose = require('mongoose');
const Editorcontrol_data = require('../models/Editor.js');
var router = express.Router();
const Editorjs = require('../models/Libro.js');

// rutas
router.get('/Libro', (req, res) => {
    res.render('Editor.js/Libro.js') 
        viewTitle: "Agrega o Actualiza el Libro"
    });


router.post('/', (req, res) => {
    if(req.body._id == '')
    insertLibro(req, res)
    else
    actualizaellibro(req, res)
});





//metodos para insertar y actualizar
function insertLibro(req, res){
    var card = new Editorcontrol_data();
    card.tipo_de_libro = req.body.tipo_de_libro;
    card.nombre_de_lapersona = req.body.nombre_de_lapersona;
    card.direccion= req.body.direccion;
    card.ano_dellibro = req.body.ano_dellibro;
    card.id=req.body.id;
    card.save(e => {
        if(!e)
        res.redirect('Libro.js/LibroList');
        else
        console.log("Error", e);
    });
}


//modificar los registros ya creados

function updateCard(req, res){
    Card.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, doc) => {
        if(!err){
            res.render('Libro.js/LibroList', {
                viewTitle: "Actualizar los datos de un Libro",
                brand: req.body
            })
        } else {
            console.log("Error", err);
        }
    });
}



//imprimir los datos de la BD en la vista de LISTBRANDS
router.get('/brandList', (req, res) => {
    Card.find((error, docs) => {
        if(!error){
            res.render("Libro.js/Editor.js/LibroList", {
                viewTitle: "Libros agregados",
                list: docs
            })
        } else {
            console.log("Error", error);
        }
    });
})






router.get('/:id', (req, res) => {
    Card.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('Libro.js/Editor.js/LibroEdit', {
                viewTitle: "Actualizar los datos de un Libro.",
                card: doc
            });
        }
    });
});





router.get('/delete/:id', (req, res) => {
    Card.findByIdAndRemove(req.params.id, (err) => {
        if(!err){
            res.redirect('Libro.js/Editor.js/LibroList');
        } else {
            console.log("Error", err);
        }
    });
})
  
  module.exports = router;