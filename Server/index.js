// index.js
const express = require("express");
const paymentRoute = require("./Routes/Payments");
const cors = require("cors");

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Use payment route
app.use("/api", paymentRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
