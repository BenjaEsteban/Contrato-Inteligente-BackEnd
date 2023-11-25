const express = require('express')
const DBConexion = require('./config/db.js')
const cors = require('cors')

const app = express()

DBConexion()

app.use(cors())

app.use(express.json())

app.use('/api/usuario', require('./routes/usuario.routes.js'));
app.use('/api/login', require('./routes/auth.routes.js'));

app.listen(8020, () => {
      console.log('Servidor corriendo en el puerto 8080...')
})