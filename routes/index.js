var express = require('express');
var router = express.Router();

// start by creating data so we don't have to type it in each time
let ServermovieArray = [];

// define a constructor to create movie objects
let MovieObject = function (pTitle, pYear, pGenre, pMan, pWoman, pURL) {
    this.ID = Math.random().toString(16).slice(5)  // tiny chance could get duplicates!
    this.Title = pTitle;
    this.Year = pYear;
    this.Genre = pGenre;  // action  comedy  drama  horrow scifi  musical  western
    this.Man = pMan;
    this.Woman = pWoman;
    this.URL = pURL;
}


ServermovieArray.push(new MovieObject("xMoonstruck", 1981, "Drama", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));
ServermovieArray.push(new MovieObject("Wild At Heart", 1982, "Drama", "Nicholas Cage", "Laura VanDern", "https://www.youtube.com/watch?v=7uRJartX79Q"));
ServermovieArray.push(new MovieObject("Raising Arizona", 1983, "Comedy", "Nicholas Cage", "Holly Hunter", "https://www.youtube.com/watch?v=NoXJKArYi1g"));
ServermovieArray.push(new MovieObject("USS Indianapolis: Men of Courage", 2016, "Drama", "Nicholas Cage", "Emily Tennant", "https://youtu.be/ZDPE-NronKk"));
ServermovieArray.push(new MovieObject("Venusstruck", 1983, "Drama", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));
ServermovieArray.push(new MovieObject("Marsstruck", 1984, "Comedy", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));
ServermovieArray.push(new MovieObject("Jupiterstruck", 1985, "Drama", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));
ServermovieArray.push(new MovieObject("Saturnstruck", 1986, "Comedy", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all Movie data */
router.get('/getAllMovies', function(req, res) {
  res.status(200).json(ServermovieArray);
});

/* Add one new note */
router.post('/AddMovie', function(req, res) {
  const newMovie = req.body;  // get the object from the req object sent from browser
  console.log(newMovie);
  ServermovieArray.push(newMovie);  // add it to our "DB"  (array)
  // prepare a reply to the browser
  var response = {
    status  : 200,
    success : 'Added Successfully'
  }
  res.end(JSON.stringify(response)); // send reply
});

module.exports = router;
