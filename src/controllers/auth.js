const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // Debe estar en una variable de entorno en producción

// Iniciar sesión
exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log("Datos recibidos:", req.body);
  try {
    const admin = await Admin.findOne({ username });
    console.log(`Username: ${username}`);

    if (!admin)
      return res.status(400).json({ message: "Credenciales inválidas" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    console.log(`Password: ${password}`);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
