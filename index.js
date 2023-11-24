// index.js
const express = require("express");
const paymentRoute = require("./routes/payment");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use payment route
app.use("/api", paymentRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
