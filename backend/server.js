
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');

// // Import routes (Ensure these files exist in your /routes folder)
// const authRoutes = require('./routes/auth.routes');
// const blockRoutes = require('./routes/blocks.routes');
// const pipelineRoutes = require('./routes/pipeline.routes');
// const experimentRoutes = require('./routes/experiment.routes');

// // Import middleware (Ensure this file exists in your /middleware folder)
// const errorMiddleware = require('./middleware/error.middleware');

// const app = express();
// const server = http.createServer(app);

// // WebSocket Setup
// const io = new Server(server, {
//   cors: {
//     origin: process.env.CLIENT_URL || 'http://localhost:3000',
//     methods: ['GET', 'POST']
//   }
// });

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // --- Database connection (FIXED) ---
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ MongoDB connected successfully'))
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:');
//     console.error(err.message);
//     console.log('\n💡 Troubleshooting Tip: Ensure your IP is whitelisted in MongoDB Atlas Network Access.');
//   });
// // ----------------------------------

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/blocks', blockRoutes);
// app.use('/api/pipelines', pipelineRoutes);
// app.use('/api/experiments', experimentRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     status: 'ok', 
//     message: 'S-CONNATE IP Backend is running',
//     timestamp: new Date().toISOString(),
//     dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
//   });
// });

// // Root route to prevent "Cannot GET /" in browser
// app.get('/', (req, res) => {
//   res.send('Backend is running! Visit /api/health for status.');
// });

// // WebSocket logic
// io.on('connection', (socket) => {
//   console.log('🔌 Client connected:', socket.id);

//   // Send dummy metrics every second to the frontend
//   const metricsInterval = setInterval(() => {
//     socket.emit('metrics', {
//       fps: (25 + Math.random() * 5).toFixed(1),
//       latency: (35 + Math.random() * 10).toFixed(0),
//       cpuUsage: (45 + Math.random() * 15).toFixed(1),
//       ramUsage: (35 + Math.random() * 10).toFixed(1)
//     });
//   }, 1000);

//   socket.on('pipeline:start', (data) => {
//     console.log('Pipeline started:', data);
//     socket.emit('status', { status: 'running' });
//   });

//   socket.on('pipeline:stop', (data) => {
//     console.log('Pipeline stopped:', data);
//     socket.emit('status', { status: 'idle' });
//   });

//   socket.on('disconnect', () => {
//     clearInterval(metricsInterval);
//     console.log('🔌 Client disconnected:', socket.id);
//   });
// });

// // Error handling middleware
// app.use(errorMiddleware);

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📡 WebSocket server ready`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Routes
const authRoutes = require('./routes/auth.routes');
const blockRoutes = require('./routes/blocks.routes');
const pipelineRoutes = require('./routes/pipeline.routes');
const experimentRoutes = require('./routes/experiment.routes');

// Global error middleware
const errorMiddleware = require('./middleware/error.middleware');

const app = express();
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error');
    console.error(err.message);
  });

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/blocks', blockRoutes);
app.use('/api/pipelines', pipelineRoutes);
app.use('/api/experiments', experimentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'S-CONNATE IP Backend running',
    timestamp: new Date().toISOString(),
  });
});

// Root
app.get('/', (req, res) => {
  res.send('Backend running. Use /api/health');
});

// WebSocket
io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);

  const metricsInterval = setInterval(() => {
    socket.emit('metrics', {
      fps: (25 + Math.random() * 5).toFixed(1),
      latency: (35 + Math.random() * 10).toFixed(0),
      cpuUsage: (45 + Math.random() * 15).toFixed(1),
      ramUsage: (35 + Math.random() * 10).toFixed(1),
    });
  }, 1000);

  socket.on('pipeline:start', () => {
    socket.emit('status', { status: 'running' });
  });

  socket.on('pipeline:stop', () => {
    socket.emit('status', { status: 'idle' });
  });

  socket.on('disconnect', () => {
    clearInterval(metricsInterval);
    console.log('🔌 Client disconnected:', socket.id);
  });
});

// ✅ GLOBAL ERROR HANDLER (MUST BE LAST)
app.use(errorMiddleware);

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready`);
});
