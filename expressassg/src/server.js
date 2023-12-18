const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
