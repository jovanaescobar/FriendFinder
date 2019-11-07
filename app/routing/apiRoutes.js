// Linking routes
// ===============================================================================
var friends = require("../data/friends");


// ROUTING
// ===============================================================================
module.exports = function(app) {

 // API GET Requests
  // Below code handles friends data show in JSON

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


// API POST Requests
  // Handles when a user submits information and thus submits data to the server. (JSON object)
  
  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000 
    };

    // Take results of user and parse it
    var userData = req.body;
    var newUser = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      Name: req.body.name,
      Photo: req.body.photo,
      scores: b
    };

// console log results
    console.log("Name: " + newUser);
    console.log("User Score: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);

    console.log("Sum of users score: " + sum);
    console.log("Best match friend: " + bestMatch.friendDifference);
    console.log("==================================");


    // foorloop to loop through all friend possibilities

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Best match friend:  " + bestMatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total score: " + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      
// Sum differences and determine best match for friend

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log("Total Difference: " + totalDifference);
      console.log("==================================");
      console.log("==================================");
    }


// Save users data to data base --- return best match
    console.log(bestMatch);
    
    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
  });
};
