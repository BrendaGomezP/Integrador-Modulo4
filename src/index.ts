import { PORT } from "./constants"

const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
    socket.write("Bienvenido a mi servidor");
    socket.on("data", () => {
        
    } )
})

server.listen(PORT, () => {
    console.log("SERVIDOR ESCUCHENDO EN PUERTO: " + PORT);
    
})

