const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const startServer = async () => {
  try {
    const mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();
