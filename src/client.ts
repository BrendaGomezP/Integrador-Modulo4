import { PORT } from "./constants";
const net = require("net");

const client = net.createConnection({port: PORT});

client.on("connect", () => {   
//const mensaje = { path: "museum" };
//const mensaje = { path: "province", province: "córdoba" }
const mensaje = { path: "id", id: 46 }
//const mensaje = { path: "name", name: "evita" }
//const mensaje = { path: "description", nameForDesc: "malvinas" }


const message = JSON.stringify(mensaje);
client.write(message);
})

client.on("data", (serverMessage: string) => {
    const mensaje = serverMessage.toString();
    const mensajeJs = JSON.parse(mensaje);
    console.log(mensajeJs); 
})