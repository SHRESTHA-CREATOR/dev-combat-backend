const { Server } = require("socket.io");
const Question = require('../models/Question');


let waitingPlayer = null;

function setupBattleSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*", // React/Next frontend ke liye
    },
  });

  io.on("connection", (socket) => {
    console.log("✅ New user connected:", socket.id);

    if (waitingPlayer) {
      // Ek aur player mila, dono ko pair kar do
      const roomId = `room-${waitingPlayer.id}-${socket.id}`;
      socket.join(roomId);
      waitingPlayer.join(roomId);

      // Ek random question fetch karlo
      Question.aggregate([{ $sample: { size: 1 } }]).then((question) => {
        const battleQuestion = question[0];
        io.to(roomId).emit("startBattle", {
          roomId,
          question: battleQuestion,
        });
      });

      // Reset waiting player
      waitingPlayer = null;
    } else {
      // Koi nahi wait kar raha, isko wait mode mein daal do
      waitingPlayer = socket;
      socket.emit("waiting", "Waiting for opponent...");
    }

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
      if (waitingPlayer && waitingPlayer.id === socket.id) {
        waitingPlayer = null;
      }
    });
  });
}

module.exports = setupBattleSocket;
