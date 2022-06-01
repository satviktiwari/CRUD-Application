const express = require("express");
const postRouter = express.Router();
const posts = require("../modals/postSchema");

// post a new post

postRouter.post("/post", async (req, res) => {
    const { name, email, post } = req.body;
    if (!name || !email || !post) {
        res.status(422).json("Please fill all the data!")
    }
    try {
        const postuser = new posts({
            name, email, post
        });

        await postuser.save();
        res.status(201).json(postuser);
        console.log(postuser);
    }
    catch (error) {
        res.status(422).send(error);
    }
})

// get a post

postRouter.get("/getposts", async(req, res) => {
    try{
        const userpost = await posts.find();
        res.status(201).json(userpost);
        console.log(userpost);
    }
    catch{
        res.status(422).send(error);
    }
})

module.exports = postRouter;