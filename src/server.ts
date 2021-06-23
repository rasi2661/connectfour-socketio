import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static('./dist/public'))

let http = require("http").Server(app);
let io = require("socket.io")(http);

// handle client
app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./src/public/index.html"));
});

var users = [];
var games = [];
var chat = [];

// handle socket
io.on("connection", (socket: any) => {
  console.log("a user connected");
  if(!socket.user) {
    // new user
    let username = "guest";
    users.push({
      username: username
    })
    socket.user = username;
  }
  socket.on('msg', (msg) => {
    console.log(socket.user + 'sent message: ' + msg);
  });
});

const server = http.listen(3000, () => {
  console.log("Server listening on *:3000");
});
