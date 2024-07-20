import { PORT } from "./constants"
import { endPoints } from "./app";

const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (mensaje) => {
        const entradaALosEP = await endPoints(mensaje)
        socket.write(entradaALosEP)
        
    } )
})

server.listen(PORT, () => {
    console.log("SERVIDOR ESCUCHENDO EN PUERTO: " + PORT);
    
})

