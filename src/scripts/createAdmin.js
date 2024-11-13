const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const dotenv = require("dotenv");

dotenv.config();
const createAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const username = "doug";
  const password = "SNKs";

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    console.log("El admin ya existe.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({ username, password: hashedPassword });
  await admin.save();
  console.log("Administrador creado con éxito.");
  mongoose.disconnect();
};

createAdmin().catch((error) =>
  console.error("Error al crear el admin:", error)
);
