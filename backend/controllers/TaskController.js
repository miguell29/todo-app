import { request, response } from "express"; //*importacion para tener las funciones de ayuda
import Tasks from "../data/tareas.js";

function Get(req, res = response) {
  try {
    res.json(Tasks);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error no se pudo obtener la informacion" });
  }
}

function Post(req = request, res = response) {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).json({ msg: "El Titulo es obligatorio" });
    }
    const newTask = {
      id: generarId(),
      title,
      description: description || "",
      completed: false,
      createdAT: new Date(),
    };
    Tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "error interno no se pudo crear la tarea" });
  }
}

function Put(req = request, res = response) {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const index = Tasks.findIndex((t) => t.id === id);
    console.log(id);
    console.log(req.body);

    if (index === -1) res.status(404).json({ msg: "Tarea no encontrada" });

    if (title !== undefined) Tasks[index].title = title;
    if (description !== undefined) Tasks[index].description = description;
    if (completed !== undefined) Tasks[index].completed = Boolean(completed);

    res.json(Tasks[index]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Error No se actulizo la tarea" });
  }
}

function Delete(req = request, res = response) {
  try {
    const { id } = req.params;
    const index = Tasks.findIndex((t) => t.id === id);
    if (index === -1) res.status(404).json({ msj: "Tarea no encontrada" });
    Tasks.splice(index, 1);
    res.status(204).send();
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ msg: "Error interno no se pudo eliminar el archivo" });
  }
}

function generarId(task = Tasks) {
  let ids = [];
  task.forEach((element) => {
    ids.push(Number(element.id));
  });
  return (Math.max(...ids) + 1).toString();
}

const task = {
  Get,
  Post,
  Put,
  Delete,
};

export default task;
