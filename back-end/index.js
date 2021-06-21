const app = require("./app");
const http = require("http");

const server = http.createServer(app);

server.listen(3000);

server.on('error', (a, f) => {
    console.log("error = ", a, f)
})

server.on('listening', (a, f) => {
    console.log("listening = ", a, f)
})