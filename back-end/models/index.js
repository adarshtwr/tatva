const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tatva', {
    useNewUrlParser: true
}, function (err, db) {
    if (db)
        console.log("Successfully connected");
    else if (err)
        console.log("Some error occured", err);
})

require("./user.model");