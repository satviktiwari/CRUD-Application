const express = require("express");
const router = express.Router();
const users = require("../modals/userSchema");


// router.get("/", (req, res) => {
//     console.log("connect");
// })


// Register User

router.post("/register", async(req, res) => {
    // console.log(req.body);
    const { name, email, age, mobile, work, add, desc } = req.body;
    if(!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(422).json("Please fill all the data!")
    }
    try{
        const preuser = await users.findOne({email: email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("User already exists!");
        }
        else{
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);

        }
    }
    catch (error) {
        res.status(422).send(error);
    }
})

// Get user data

router.get("/getdata", async(req, res) => {
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }
    catch{
        res.status(422).send(error);
    }
})


//get individual user deatils
router.get("/getuser/:id", async(req, res) => {
    try{
        console.log(req.params);
        const {id} = req.params;
        const userindividual = await users.findById({_id: id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    }
    catch(error){
        res.status(422).send(error);
    }
})

//update user data
router.patch("/updateuser/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    }
    catch{
        res.status(422).send(error);
    }
})

//delete user
router.delete("/deleteuser/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const deleteuser = await users.findByIdAndDelete({_id: id});
        console.log(deleteuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})

module.exports = router;