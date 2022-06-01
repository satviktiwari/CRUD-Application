const mongoose = require("mongoose");

const db = 'mongodb+srv://satvik:satviktiwari@cluster0.cultz.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connected successfully!')?.catch((error) => {
        console.log(error.message);
    })
})