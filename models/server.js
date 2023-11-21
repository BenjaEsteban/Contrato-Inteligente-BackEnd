const express = require('express');
const cors  = require('cors')
class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        // ROUTES
        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use(cors())

        //Parse
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/api/auth', require('../routes/auth.routes')); // operations that login - logout
        this.app.use('/api/check', require('../routes/check.routes')); // correction of data
        this.app.use('/api/contract', require('../routes/contract.routes')); // contract related routes
        this.app.use('/api/user', require('../routes/user.routes')); // user related routes

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Working on :', this.port);
        })
    }
}
module.exports = Server;
