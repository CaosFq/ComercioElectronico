//0.Confugurar mis variables de entorno
require('dotenv').config();

//1.importamos el modelo
const Server = require('./models/servers');

//2.Instanciamos el servidor o la clase
const server = new Server();

//3. pongo a escuchar ni servidor
server.listen();
