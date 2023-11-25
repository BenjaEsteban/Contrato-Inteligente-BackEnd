const User = require("../models/usuario.model.js")
require('dotenv').config({ path: '.env'})
const jwt = require('jsonwebtoken')

exports.signIn = async (req, res) => {
      const rutUser = await User.findOne({rut: req.body.rut})
      
      if (!rutUser) {
            return res.status(400).json({message: "Usuario no encontrado"})
      }

      const matchPassword = await User.comparePassword(req.body.password, rutUser.password)

      if (!matchPassword) {
            return res.status(401).json({token: null, message: "Contraseña incorrecta"}) 
      }

      const token = jwt.sign({id: rutUser._id}, process.env.SECRET_KEY, {
            expiresIn: 3600
      })

      console.log(rutUser)

      res.json({token, rutUser})
} 
