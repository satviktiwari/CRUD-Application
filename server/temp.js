require("dotenv").config();
const express = require("express");
const postApp = express();
const mongoose = require("mongoose");
require("./db/conn");
const posts = require("./modals/postSchema")
const cors = require("cors");
const postRouter = require("./routes/postRouter");

const port = 9000;

postApp.use(cors());

postApp.use(express.json());
postApp.use(postRouter);

postApp.listen(port, () => {
    console.log(`server listening to port ${port}`);
})