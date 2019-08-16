var friendList = require("../data/friends.js");
path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
      });
    
      app.post("/api/friends", function(req, res) {
        var scoresArray = [];
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scoresArray
        };
        var bestMatch = {
          name: "",
          photo: "",
          friendDifference: Infinity
        };
     
     
        var currentBest = 100;
        var differenceArray = [];
        for (i = 0; i < friendList.length -1; i++ ) {
          
            for(j = 0; j < 10; j++) {
                var friendsDifference = newFriend.scores[j] - friendList[i].scores[j];
                differenceArray.push(Math.abs(friendsDifference));
               
            }
            var difference = differenceArray.reduce(function(total,amount){
                return total + amount
            });
            console.log(difference);

            difference=50;
            
            if (difference < currentBest) {
                bestFriend = friendList[i];
                currentBest = difference;
                differenceArray = [];
            }
            else {
            differenceArray = [];
            }
          }
          console.log(bestMatch);
          res.json(bestMatch);
          
        // for (i = 0; i < req.body.scores.length; i++) {
        //     scoresArray.push(parseInt(req.body.scores[i]))
        // // }
        // friendList.push(newFriend);
      })

};