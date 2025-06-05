import { useState, useEffect } from "react";
import type { ITask } from "../Interfaces/ITask";
import { Col, Row, Container, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";


export const TaskList = () => {

    const [Tasks, setTasks] = useState<ITask[]>([]);

    const getTasks = async() => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (res.ok) {
            const data = await res.json();
            setTasks(data);
            console.log(data);
            
        }
    }

    const deleteTask = (id: string) => {
        console.log(id);
        
    }

    useEffect(() => {
        getTasks()
    },[]);


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col sm={{size:8, offset:2}}>
                        <h4>Lista de Tareas</h4>
                        <hr />
                        <Link className="btn btn-success mb-3" to="/TaskForm">Agregar Tarea</Link>

                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Fecha De creacion</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                    </thead>
                                <tbody>
                                    {Tasks.map(task => (
                                        <tr key={task.id}>
                                            <td>{task.title}</td>
                                            <td>{new Date(task.createdAt).toUTCString()}</td>
                                            <td><Link className="btn btn-outline-success mb-3" to={`/TaskItem/${task.id}`}>👀 detalles</Link></td>
                                            <td><Link className="btn btn-outline-primary mb-3" to={`/TaskForm/${task.id}`}>Editar</Link></td>
                                            <td><Button className="btn btn-outline-danger" onClick={() => {deleteTask(task.id)}}>Eliminar</Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}