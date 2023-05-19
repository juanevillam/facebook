// ** Server Configuration
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const messagesRoute = require("./routes/messages");
const { dbConnection } = require("./database/config");
const conversationsRoute = require("./routes/conversations");

dotenv.config();

const app = express();

// ** MongoDB Connection
dbConnection();

// ** Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use(express.static("public"));
app.use("/api/messages", messagesRoute);
app.use("/api/conversations", conversationsRoute);

app.listen(8800, () => console.log(`Backend server is running on port 8800.`));
