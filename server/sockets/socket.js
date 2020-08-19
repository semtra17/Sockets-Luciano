const { io } = require("../server")

io.on("connection", (client) => {

    console.log(" Usuario conectado ");
    // Enviar Informacion
    client.emit("enviarMensaje", {
        usuario: "Admin",
        mensaje: "Bienvenido a nuestro servidor",
    })




    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });



    // Escuchar el frontEnd
    client.on("enviarMensaje", (mensaje, callback) => {

        client.broadcast.emit("enviarMensaje", mensaje)
            // console.log(mensaje);
            // if (mensaje.usuario) {
            //     callback({
            //         resp: "Todo salio bien!"
            //     });

        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL!!!"
        //     })
        // }
    })




})

module.exports