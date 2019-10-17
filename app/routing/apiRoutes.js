// Connect JSON file -- Connects to array of objects
var friends = require("../data/friends.js");

// API GET request to -- Gets our friends data from the friends JSON
module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

// API POST requests
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

var userData = req.body;
var userName = UserData.name;
var userScores = UserData.scores;

var b = userScores.map(function(item){
    return parseInt(item, 10);
});

UserData = {
    name: req.body.name,
    photo: req.body.photo,
    scores: b
};

console.log("Name: " + userName);
console.log("User Score: " + userScores);

var sum = b.reduce((a, b) => a + b, 0);
console.log("Sum of users score: " + sum);
console.log("Best match friend difference " + bestMatch.friendDifference);
console.log("++++++++++++===========");

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].name);
    totalDifference = 0;
    console.log("Total difference " + totalDifference);
    console.log("Best match friend diff " + bestMatch.friendDifference);

var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
console.log("Total friend score " + bfriendScore);
totalDifference += Math.abs(sum - bfriendScore);
console.log("-----------------> " + totalDifference);

}


    });
};