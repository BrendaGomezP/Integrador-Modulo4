
const net = require("net");

const client = net.createConnection({port: 3000});

client.on("connect", () => {
//const mensaje = { path: "museum" };
//const mensaje = { path: "province", province: "buenos aires" }
//const mensaje = { path: "id", id: 50 }
const mensaje = { path: "name", name: "museo del libro y de la lengua" }
//const mensaje = { path: "description", nameForDesc: "" }


const message = JSON.stringify(mensaje);
client.write(message);
})

client.on("data", (serverMessage: string) => {
    const mensaje = serverMessage.toString();
    const mensajeJs = JSON.parse(mensaje);
    console.log(mensajeJs); 
})