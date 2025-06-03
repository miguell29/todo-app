import { request, response } from "express";
import Tasks from "../data/tareas.js";

function get(req, res = response) {
  try {
    res.json(Tasks);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error no se pudo obtener la informacion" });
  }
}

function post(req = request, res = response) {
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

function generarId(task = Tasks) {
  let ids = [];
  task.forEach((element) => {
    ids.push(Number(element.id));
  });
  return (Math.max(...ids) + 1).toString();
}

const task = {
  get,
  post,
};

export default task;
