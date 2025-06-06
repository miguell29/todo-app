import { Col, Row, Container, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetTasks } from "../hooks/data";


export const TaskList = () => {
    
    const { tasks, fetchTasks } = useGetTasks();

    const deleteTask = (id: string | undefined) => {
        if (id == undefined) return
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Eliminar Tarea!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { method: "DELETE" });
                if (res.ok) await fetchTasks()
            }
        });

    }


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
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
                                {tasks.map(task => (
                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{new Date(task.createdAt).toUTCString()}</td>
                                        <td><Link className="btn btn-outline-success mb-3" to={`/TaskItem/${task.id}`}>👀 detalles</Link></td>
                                        <td><Link className="btn btn-outline-primary mb-3" to={`/TaskForm/${task.id}`}>Editar</Link></td>
                                        <td><Button className="btn btn-outline-danger" onClick={() => { deleteTask(task.id) }}>Eliminar</Button></td>
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