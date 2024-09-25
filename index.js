
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const authRouter = require('./routes/authRoute');
// const userRouter = require('./routes/userRoute');
// const listingRouter = require('./routes/listingRoute');
// const path = require('path');

// const app = express();
// dotenv.config();

// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// // Connect to MongoDB
// mongoose.connect(process.env.DB_CONNECTION)
//   .then(() => {
//     console.log("Your connection is successful!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Serve static files if needed (uncomment if using client-side files)
// // const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/client/dist')));

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// // });

// // Use routers
// app.use("/server/auth", authRouter);
// app.use("/server/user", userRouter);
// app.use("/server/listing", listingRouter);

// // Middleware to handle errors
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || process.env.PORT;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });







const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const listingRouter = require('./routes/listingRoute');
const path = require('path');

const app = express();
dotenv.config();

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN, // Specify the allowed origin(s)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Your connection is successful!");
  })
  .catch((error) => {
    console.log(error);
  });

// Serve static files if needed (uncomment if using client-side files)
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// Use routers
app.use("/server/auth", authRouter);
app.use("/server/user", userRouter);
app.use("/server/listing", listingRouter);

// Middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});








