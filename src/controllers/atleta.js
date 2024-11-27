const Atleta = require("../models/Atleta");

// Obtener todos los atletas
exports.getAtletas = async (req, res) => {
  try {
    const { position, category } = req.query;
    const query = {};

    if (position) query.position = position;
    if (category) query.category = category;

    const atletas = await Atleta.find(query);
    res.status(200).json(atletas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener atletas", error });
  }
};

// Agregar un atleta
exports.addAtleta = async (req, res) => {
  try {
    const nuevoAtleta = new Atleta(req.body);
    const atletaGuardado = await nuevoAtleta.save();
    res.json({
      message: "Su información fue almacenada con éxito",
      atletaGuardado,
    });
  } catch (error) {
    console.error("Error al agregar atleta:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Eliminar Atleta por ID
exports.deleteAtleta = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAtleta = await Atleta.findByIdAndDelete(id);

    if (!deletedAtleta) {
      return res.status(404).json({ message: "Atleta no encontrado" });
    }

    res.status(200).json({ message: "Atleta eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el atleta", error });
  }
};

// Actualizar Atleta por ID
exports.updateAtleta = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedAtleta = await Atleta.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedAtleta) {
      return res.status(404).json({ message: "Atleta no encontrado" });
    }

    res.status(200).json(updatedAtleta);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el atleta", error });
  }
};
