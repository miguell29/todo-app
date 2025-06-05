import { useState, type ChangeEvent } from "react"
import type { ITask } from "../Interfaces/ITask"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Swal from "sweetalert2"


const initialTask: ITask = {
    id: "",
    title: "",
    description: "",
    completed: false,
    createdAt: new Date()
}

export const TaskForm = () => {

    const [task, setTask] = useState<ITask>(initialTask)
    const navigate = useNavigate();
    const createTask = (e: ChangeEvent<HTMLInputElement>) => {

        const inputName = e.target.name;
        const inputValue = e.target.value;
        setTask({ ...task, [inputName]: inputValue });
    }
    const volver = () => { navigate("/") };
    const guardar = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        if (res.ok) {
            navigate('/');
        } else {
            Swal.fire({
                title: "Error!",
                text: "No se pudo crear la Tarea",
                icon: "warning"
            })
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={{ size: 8, offset: 2 }}>
                    <h4 className="mt-5">Nueva Tarea</h4>
                    <hr className="mb-5" />
                    <Form>
                        <FormGroup>
                            <Label>Titulo</Label>
                            <Input type="text" name="title" onChange={createTask}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Descipcion</Label>
                            <Input type="text" name="description" onChange={createTask}></Input>
                        </FormGroup>
                    </Form>
                    <div className="text-end mt-5">
                        <Button color="primary" className="me-3" onClick={guardar}>Guardar</Button>
                        <Button color="secondary" onClick={volver}>Volver</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}