import { type ChangeEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { useEditTask, useGetTask } from "../hooks/data"




export const TaskEditForm = () => {
    const { id } = useParams();
    const { task, setTask } = useGetTask(id)
    const navigate = useNavigate();
    const createTask = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setTask({ ...task, [inputName]: inputValue });
    }
    const guardar = useEditTask
    const volver = () => { navigate("/") };



    return (
        <Container>
            <Row>
                <Col sm={{ size: 8, offset: 2 }}>
                    <h4 className="mt-5">Editar Tarea</h4>
                    <hr className="mb-5" />
                    <Form>
                        <FormGroup>
                            <Label>Titulo</Label>
                            <Input type="text" name="title" onChange={createTask} value={task.title}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Descripcion</Label>
                            <Input type="text" name="description" onChange={createTask} value={task.description}></Input>
                        </FormGroup>
                    </Form>
                    <FormGroup check>
                        <Input
                            name="completed"
                            id="checkbox"
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setTask({ ...task, completed: e.target.checked });
                            }}
                        />
                        {' '}
                        <Label check>
                            {task.completed ? "Tarea Completada" : "Tarea Incompleta"}
                        </Label>
                    </FormGroup>
                    <div className="text-end mt-5">
                        <Button color="primary" className="me-3" onClick={() => { guardar(id,task, navigate) }}>Guardar</Button>
                        <Button color="secondary" onClick={volver}>Volver</Button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}