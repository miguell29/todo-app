import Tasks from "../data/tareas.js";

function get(req, res) {
  try {
    res.json(Tasks);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error no se pudo obtener la informacion" });
  }
}

const usuario = {
  get,
};

export default usuario;
