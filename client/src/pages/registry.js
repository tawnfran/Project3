import React from "react";
// var cheerio = require("cheerio")
// var axios = require("axios")

// axios.get("https://www.amazon.com/s?k=silverware&ref=nb_sb_noss_2").then(function(response) {
//   var $ = cheerio.load(response.data);
//   var results = [];

//   $("h1").each(function(i, element) {

//     var title = $(element).text();
//     var link = $(element).children().attr("href");

//     results.push({
//       title: title,
//       link: link
//     });
//   });
//   console.log(results);
// });

function registry() {
    return (
      <div className="container">
        <h1>Registry</h1>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add Gifts" aria-label="Add Gifts" aria-describedby="button-addon2"/>
        <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    </div>
      
      </div>
    );
  }
  
  export default registry;
  