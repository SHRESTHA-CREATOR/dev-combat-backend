// 1. Basic imports
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const socketIO = require('socket.io');
const path = require('path');


// 2. Import routes and socket logic
const questionRoutes = require('./routes/questions');
const aiJudgeRoutes = require('./routes/aiJudge');
const battleSocket = require('./socket/battleSocket');

// 3. App and server setup
require('dotenv').config(); // If .env is in root, adjust path
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*', // Allow frontend
    methods: ['GET', 'POST']
  }
});
app.get("/", (req, res) => {
  res.send(" Dev Combat Backend is Running!");
});

// 4. Middleware
app.use(cors());
app.use(express.json());

// 5. Basic test route
app.get('/api/ping', (req, res) => {
  res.send('Server is live 🚀');
});

// 6. API routes
app.use('/api/questions', questionRoutes);
app.use('/api/ai', aiJudgeRoutes);

// 7. Real-time socket connection
io.on('connection', (socket) => {
  console.log('🔌 New user connected:', socket.id);
  battleSocket(io, socket); // Socket logic from separate file
});

// 8. MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));

// 9. Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
