const express = require('express');
const cors = require('cors');
//const { db } = require('../database/db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3650;

    this.paths = {
      user: '/api/v1/user',
      products: '/api/v1/products',
    };

    //Path Routes
    this.routes();

    //Connect to db
    // this.database();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    /* this.app.use(cors());*/
    this.app.use(express.json()); //Me permite trabajar con formato json
  }

  routes() {}
  /*
    database() {
        db.authenticate()
            .then(() => console.log('Database authenticated'))
            .catch(err => console.log(err));

        //relations


        db.sync()
            .then(() => console.log('Database synced'))
            .catch(err => console.log(err));
    }
*/
  //Método para escuchar solicitudes por el puerto
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Running On Port', this.port + '😎😎‼');
    });
  }
}

module.exports = Server;
