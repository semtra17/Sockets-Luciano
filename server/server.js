const express = require('express');

const http = require("http");

const socketIO = require("socket.io");

const path = require('path');
const { argv } = require('process');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
// De esta manera ya montamos nuestro servidor de manera mas rapida con las configuracion de express
let server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// Implementamos socket.io a nuestro servidor de desarrollo
// "io" es la comunicacion bilateral del backend

module.exports.io = socketIO(server);
require("../server/sockets/socket");
// El objeto client es la informacion del usuario o la computadora que se conecto a nuestro servidor mediante sockets







server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});