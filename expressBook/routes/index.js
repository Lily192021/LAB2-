const express = require('express')
const mongoose = require('mongoose')

var Libro = require('../models/Libro.js')


const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Libro' });
});


router.post('/register', async (req, res) => {
  const {Libro, titulodellibro,anodellibro, id,direccion } = req.body;

        const index = new Libro_data({
          'Libro':Libro,
          'titulodellibro':titulodellibro,
          'anodellibro': anodellibro,
          'id':id,
          'direccion':direccion,
        });
        Libro.save();
        
        res.render(Libro, {
          message: "Registro exitoso. Inicie sesion",
          messageClass: "alert-success"
        });
      });
    
      router.post('/login', async (req, res) => {
        const { nombre,direccion } = req.body;
        const isbn= methods.getHashedPassword(isbn);
      
        user = await User.findOne({ nombre: nombre, direccion: direccion })
          .then(user => {
            if(user){
              const authToken = methods.generateAuthToken();
              methods.authTokens[authToken] = user;
              res.cookie('AuthToken', authToken); //setting token
              res.redirect("Libro.js/home"); //redirect
            } else {
              res.render(loginPage, {
                message: "Nombre y direccion invalidos",
                messageClass: "alert-danger"
              });
            }
          }) 
      });
      
      router.get('/logout', (req, res) => {
        res.clearCookie('AuthToken');
        return res.redirect('/');
      });    
  
       

module.exports = router;