const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const authToken = req.headers.token;
  console.log(req.headers);
  if (authToken) {
    const token = authToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).send("Token not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You're not authenticated");
  }
};

module.exports = { verifyUser };
