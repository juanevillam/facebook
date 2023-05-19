const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    // ** MongoDB Connection
    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected.");
  } catch (error) {
    throw new Error("Error initializing the database.");
  }
};

module.exports = { dbConnection };
