const SocketIOServer = require("socket.io");

function configSocketIO(server) {
    let io = SocketIOServer(server);

    io.on("connection", socket => {
        socket.on("msg", msg => {
            io.emit("msg", msg);
        });
    });
}


module.exports.configSocketIO = configSocketIO;