import React, { Component } from "react";
var cheerio = require("cheerio")
var axios = require("axios")

class Registry extends React.Component {

  componentDidMount() {
    this.scrape();
  }

  scrape() {
//     // A GET route for scraping the amazon website
// router.get("/scrape", function (req, res) {
  // First, grab the body of the html with axios
  axios.get("https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers").then(function (response) {
    // Then, load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, grab every h2 within an Product tag, and do the following:
    $("div .a-section .a-spacing-mini").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Select the appropriate and use .children () and .parent () to grab information.
      result.name = $(this)
        .children("img")
        .attr("alt");
      result.link = $(this)
        .parent()
        .attr("href");
      result.image = $(this)
        .children("img")
        .attr("src");
        console.log(result);
      })


    });

  }

  render() {
    return (
      <div className="container">
        <h1>Registry</h1>
        <div className="input-group mb-3" id="registryInput">
          <input type="text" className="form-control" placeholder="Add Gifts" aria-label="Add Gifts" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <div>
          <h2>Your Gifts</h2>
          <ul class="list-group">
            <li class="list-group-item active">Silverware Set</li>
            <li class="list-group-item">Grill</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Registry;
  