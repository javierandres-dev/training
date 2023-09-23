export function getToken(payload) {
  jwt.sign(
    { id: userFound._id, name: userFound.name },
    "topSecret321",
    { expiresIn: "1d" },
    (err, token) => {
      if (err) {
        res.json({ err });
      } else {
        res.json({ token });
      }
    }
  );
}
