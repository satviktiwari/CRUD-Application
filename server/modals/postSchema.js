const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
})

const posts = new mongoose.model("posts", postSchema);

module.exports = posts;