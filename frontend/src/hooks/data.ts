import { useEffect, useState } from "react";
import type { ITask } from "../Interfaces/ITask";
import Swal from "sweetalert2";

const initialTask: ITask = {
  id: "",
  title: "",
  description: "",
  completed: false,
  createdAt: new Date(),
};

export const useGetTask = (id: string | undefined) => {
  const [task, setTask] = useState<ITask>(initialTask);

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setTask(data);
      }
    };
    fetchTask();
  }, [id]);

  return {
    task,
  };
};

export const useGetTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}`);
    if (res.ok) {
      const data = await res.json();
      setTasks(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    fetchTasks,
  };
};

export const useSaveTask = async (
  task: ITask,
  navigate: (path: string) => void
) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (res.ok) {
    navigate("/");
  } else {
    Swal.fire({
      title: "Error!",
      text: "No se pudo crear la Tarea",
      icon: "warning",
    });
  }
};


