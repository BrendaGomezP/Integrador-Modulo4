
const net = require("net");

const client = net.createConnection({port: 3000});

client.on("connect", () => {
    client.write("Conectadisimooo")
})

client.on("data", ()=> {
    
})