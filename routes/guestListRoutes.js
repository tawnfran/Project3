const db = require("../models");

const passport = require("passport");
const express = require("express");



module.exports = function(app){

    app.post("/api/guestlist", 
        function (req, res) {
        console.log("inside guestListRoutes.js app.post /api/guestlist ran, req is ");
        console.log(req);
        console.log("inside guestListRoutes.js, req.whoseList is");
        console.log(req.whoseList);
        if (req.user) {
          var whoseList = req.user.id;
          console.log("whoseList is");
          console.log(whoseList);
          db.Guestlist.create({
              guests: req.body.guests,
              whoseList: whoseList
          })
            .then(function () {
                console.log("New guest added!");
                res.json(req.guests);
            }).catch(function(err) {
                console.log(err);
            });
        }
      });

    
    app.get("/api/retrieveGuests", 
        function (req, res) {
        console.log("inside guestListRoutes.js app.post /api/guestlist ran, req.user is ");
        console.log(req.user);
        if (req.user) {
          var whoseList = req.user.id;
          console.log("whoseList is");
          console.log(whoseList);
          db.Guestlist
            .findAll({
              where: {
                whoseList: whoseList
              }
            })
            .then(function (guests) {
              console.log(guests);
              var listOfGuests = [];
              for(let i=0; i<guests.length; i++){
                listOfGuests.push(guests[i]);
              }
              console.log("listOfGuests is:");
              console.log(listOfGuests);
                // {
                // user: req.user,
                // username: dbUser.username,
                // firstname: dbUser.firstname,
                // lastname: dbUser.lastname,
                // image: dbUser.image
              //   username: dbUser.username,
              //   password: dbUser.password,
              //   fullname: dbUser.fullname,
              //   email: dbUser.email
              // };
              res.json(listOfGuests);
            });
        }
      });



}