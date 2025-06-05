import { useState, useEffect } from "react";
import { ITask } from "../Interfaces/ITask";



export const TaskList = () => {

    const [Task, setTask] = useState<ITask[]>([]);

    const getTasks = async() => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (res.ok) {
            const data = await res.json();
            setTask(data);
            console.log(data);
            
        }
    }

    useEffect(() => {
        getTasks()
    },[]);


    return (
        <>
            <h1>lista</h1>
            <p>{Task[0].title}</p>
        </>
    )
}