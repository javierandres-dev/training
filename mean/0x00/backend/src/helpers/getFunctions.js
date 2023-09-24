const jwt = require("jsonwebtoken");

function getToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "topSecret321", { expiresIn: "1d" }, (err, token) => {
      if (err) {
        reject({ err });
      } else {
        resolve({ token });
      }
    });
  });
}

function getTen() {
  return 10;
}

module.exports = { getToken, getTen };
