const express = require('express')
const DBConexion = require('./config/db.js')
const cors = require('cors')

const app = express()

DBConexion()

app.use(cors())

app.use(express.json())

app.use('/usuario', require('./routes/usuario.routes.js'));

app.listen(8020, () => {
      console.log('Servidor corriendo en el puerto 8080...')
})