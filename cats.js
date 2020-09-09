var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temprament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temprament: "Evil"
// });

// george.save((err, cat) => {
//     if(err){
//         console.log("Something went wrong.");
//     } else {
//         console.log("We just saved a cat to the DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temprament: "Bland"
}, (err, cat) => {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and log each one

Cat.find({}, (err, cats) => {
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("All of the Cats");
        console.log(cats);
    }
});