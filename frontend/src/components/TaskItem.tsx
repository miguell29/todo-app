import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Row } from "reactstrap"
import type { ITask } from "../Interfaces/ITask"




const initialTask: ITask = {
    id: "",
    title: "",
    description: "",
    completed: false,
    createdAt: new Date()
}


export const TaskItem = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [task, setTask] = useState<ITask>(initialTask)
    

    const getTask = async (id: string | undefined) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            
            setTask(data);
        }
    }

    useEffect(() => {
        getTask(id)
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <h4 className="mt-5">id: {task.id}</h4>
                        <hr className="mb-5" />
                        <Card
                            className="my-2"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader>
                                {new Date(task.createdAt).toUTCString()}
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {task.title}
                                </CardTitle>
                                <CardText>
                                    {task.description}
                                </CardText>
                                <Button color="secondary" onClick={() => {navigate("/")}}>Volver</Button>
                            </CardBody>
                            <CardFooter>
                                {task.completed ? "Tarea Completada" : "Tarea Incompleta"}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}