const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://aniruddhadwariad:jAfURTO0ZbVXtkk7@cluster0.wpgamvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(`no connection`);
})