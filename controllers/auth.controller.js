const User = require("../models/usuario.model.js")

require('dotenv').config({ path: '.env'})

const jwt = require('jsonwebtoken')

exports.signIn = async (req, res) => {
      const rutUser = await User.findOne({rut: req.body.rut})
      const matchPassword = await User.comparePassword(req.body.password, rutUser.password)

      const token = jwt.sign({id: rutUser._id}, process.env.SECRET_KEY, {
            expiresIn: 3600
      })
      
      if (!rutUser) {
            return res.status(400).json({message: "Usuario no encontrado"})
      }

      if (!matchPassword) {
            return res.status(401).json({token: null, message: "Contraseña incorrecta"}) 
      }
      
      console.log(rutUser)

      // La respuesta debe ser un token y no el usuario, una futura mejora es una validación del token la cual
      // se encuentra en los middlewares
      res.json({rutUser})
} 
