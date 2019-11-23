const SocketIOServer = require("socket.io");

function configSocketIO(server) {
    let io = SocketIOServer(server);

    function broadcastClientList() {
        io.of("/").clients((err, clients) => {
            if (!err) {
                io.emit("listClients", clients);
            }
        });
    }

    io.on("connection", socket => {
        broadcastClientList();

        socket.on("msg", data => {
            if (data.receiver && data.msg) {
                io.to(data.receiver).emit("msg", data);
                socket.emit("msg", data);
            }
        });

        socket.on("disconnect", () => {
            broadcastClientList();
        });
    });
}


module.exports.configSocketIO = configSocketIO;