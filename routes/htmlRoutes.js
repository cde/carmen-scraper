// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = function(app) {
  // A GET route for scraping the echoJS website
  app.get("/scrape", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("http://news.mit.edu/topic/robotics").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      const $ = cheerio.load(response.data);

      $("li.views-row").each(function (i, element) {
        const result = {};
        result.title = $(this)
          .find("h3 a")
          .text()

        result.link = $(this)
          .find("h3 a")
          .attr("href")

        result.summary = $(this)
          .find("p.dek")
          .text()

        result.imageUrl = $(this)
          .find("img")
          .attr("src")

        console.log(result);

        var query = { title: result.title},
          options = { upsert: true, new: true, setDefaultsOnInsert: true };

        db.Article.findOneAndUpdate(query, result, options, function(error, dbArticle) {
          if (error){
            console.log(error);
            return
          } ;
          // do something with the document
          console.log(dbArticle)
        });

      });
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
      // res.render("Scrape Complete");
    });

  });

  app.get('/', function (req, res) {
    db.Article.find({}).exec(function(err, dbArticle) {
      if (!err) {
        // handle result
        res.render('index', {articles: dbArticle, title: 'MIT Robotics'});
      } else {
        // error handling
        res.render(err);
      };
    });
  });

// Route for getting all Articles from the db
  app.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.render('index', {articles: dbArticle, title: 'MIT Robotics'});
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.render(err);
      });
  });

}
