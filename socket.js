const io = require ("socket.io")(server);



io.on("connection", (socket) => {
    console.log("New User Connected");
});

module.exports = io;