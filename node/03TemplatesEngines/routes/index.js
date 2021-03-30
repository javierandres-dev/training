"use stric";
const express = require("express"),
  router = express.Router();
function jade(req, res, next) {
  const locals = {
    author: "Javier Andrés GP",
    title: "Jade",
    link: "https://jade-lang.com",
    description:
      "Jade is an templating engine, primarily used for server-side templating in NodeJS.",
  };
  res.render("index", locals);
}
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
router.get("/", (req, res) => {
  res.end("<h1>Hello, World!; from first App in Express</h1>");
});
router.get("/jade", jade);
router.use(error404);
module.exports = router;
