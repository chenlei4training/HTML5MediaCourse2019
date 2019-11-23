const net = require("net");

let all_conn = new Map();

const server = net.Server(socket => {

    all_conn.set(socket, socket);
    // socket.write("Hello World\n");

    socket.on("data", data => {
        // console.log(data.toString());
        // socket.write(data);

        for (let [k, v] of all_conn) {
            k.write(data);
        }
    });

    socket.on("close", () => {
        all_conn.delete(socket);
    });
});

server.listen(3000);