const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const blacklist = require("../blacklist");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ message: "Token requerido" });

  if (blacklist.includes(token)) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    console.log("Token recibido:", token);
    console.log("JWT_SECRET usado:", JWT_SECRET);
    console.log(error);
    if (error) return res.status(401).json({ message: "Token inválido" });
    req.admin = decoded;
    next();
  });
};

module.exports = verifyToken;
