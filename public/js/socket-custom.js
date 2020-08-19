var socket = io();
socket.on("connect", function() {
    console.log("Conectado al servidor");
})

socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
})

// Enviar Informacion

socket.emit("enviarMensaje", {
    usuario: "Luciano",
    mensaje: "Hola Perro"
}, function(resp) {
    //  La resp viene del servidor, es devuelta porque del lado del sv es un callback es el que responde.
    console.log(resp);
});


// escuchamos info

socket.on("enviarMensaje", function(mensaje) {
    console.log(mensaje);

});