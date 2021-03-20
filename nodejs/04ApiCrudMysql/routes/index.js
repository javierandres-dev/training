"use stric";
const movies = require("../models/movies"),
  express = require("express"),
  router = express.Router();
function error404(req, res, next) {
  const error = new Error(),
    locals = {
      title: "404 Error",
      description: "Page Not Found",
      error: error,
    };
  error.status = 404;
  res.render("error", locals);
  next();
}
router.use(movies);
router.get("/", (req, res, next) => {
  req.getConnection((err, movies) => {
    movies.query("SELECT * FROM movie", (err, rows) => {
      const locals = {
        title: "Movie lists",
        data: rows,
      };
      res.render("index", locals);
    });
  });
  //next();
});
router.get("/add", (req, res, next) => {
  res.render("add-movie", { title: "Add movie" });
});
router.use(error404);
module.exports = router;
