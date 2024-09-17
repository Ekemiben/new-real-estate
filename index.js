// const Customer = require('../models/customer');
// const Users = require('../models/usermodel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');



// const express = require('express')
// const mongoose = require('mongoose') ;
// const cors = require("cors")
// const dotenv = require("dotenv");
// const cookieParser = require('cookie-parser');
// const authRouter = require('./routes/authRoute');
// const userRouter = require('./routes/userRoute');
// const signOut = require('./routes/authRoute')
// const path = require('path');

// const listingRouter =  require('./routes/listingRoute')
// const app = express();
// dotenv.config()
// app.use(cors());

// mongoose.connect(process.env.DB_CONNECTION)
// .then(()=>{
//     console.log("Your connection is successful!")
// })
// .catch((error)=>{
//     console.log(error)
// })

// const __dirname = path.resolve();

// app.use(express.json())

// app.use(cookieParser());

// app.listen(5000, ()=>{
//     console.log("Server is running on port 5000")
// })





// // app.use("/user",userRouter)
// app.use("/server/auth", authRouter, signOut);
// app.use("/server/user", userRouter);
// app.use("/server/listing/", listingRouter);



// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })


// // Middleware to handle error
// app.use((err,req, res, next)=>{
//     const statusCode = err.statusCode || 500;
//     const message = err.message || "Internal Server Error"
//     return res.status(statusCode).json({
//         success:false,
//         statusCode,
//         message,
//     })
// })







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

app.use(cors());
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
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});







