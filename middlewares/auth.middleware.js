const jwt = require('jsonwebtoken')
const User = require('../models/usuario.model.js')
require('dotenv').config({ path: '.env'})


export const verifyToken = async (req, res, next) => {
      const token = req.headers["x-access-token"]
      console.log(token)
      
      if (!token) {
            return res.status(403).json({message: "Necesita un token para continuar"})
      }

      const decoder = jwt.verify(token, process.env.SECRET_KEY)
      req.userId = decoder.id

      const user = await User.findById(req.userId, {password: 0})
      if (!user) {
            return res.status(404).json({message: "Usuario no encontrado"})
      }

      console.log(decoder)

      next()
}