// db.js
const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://talk2adeoluwa2310:fn0l4gbXMFd3aEVE@cluster0.vauk33o.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
