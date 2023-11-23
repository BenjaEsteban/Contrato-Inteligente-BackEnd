const express = require('express')
const DBConexion = require('./config/db.js')
const cors = require('cors')

const app = express()


try {
      DBConexion()
      console.log('Conexion exitosa')
} catch (error) {
      console.alert(error)
}

app.use(cors())

app.use(express.json())

app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
})