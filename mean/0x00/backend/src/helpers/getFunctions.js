const jwt = require("jsonwebtoken");

function getToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          reject({ err });
        } else {
          resolve({ token });
        }
      }
    );
  });
}

function getTen() {
  return 10;
}

module.exports = { getToken, getTen };
