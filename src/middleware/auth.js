const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Token requerido" });

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) return res.status(401).json({ message: "Token inválido" });
    req.admin = decoded;
    next();
  });
};

module.exports = verifyToken;
