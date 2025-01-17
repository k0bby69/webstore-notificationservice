const express = require("express");
const app = express();
const mongoose = require("mongoose");
const print = console.log;
const cors = require("cors");
const port = process.env.PORT || 8004;
const notificationRoutes = require("./api/notifications");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Define the allowed origins
const allowedOrigins = ['http://localhost:3000', 'https://webstore-userservice.onrender.com']; // Replace with your actual domains

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true, // Allow credentials (cookies, Authorization headers)
};

app.use(cors(corsOptions)); // Apply the CORS middleware with the custom options

const { CreateChannel, SubscribeMessage } = require("./utils");

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URI);
    print("Connection successful");

    const channel = await CreateChannel();

    await notificationRoutes(app, channel);
    app.listen(port, () => {
      console.log(`Notifications service is listening on Port ${port}`);
    });
  } catch (err) {
    console.log("Failed to start app:", err);
  }
}

startApp();
