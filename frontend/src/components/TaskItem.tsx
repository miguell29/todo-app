//import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Row } from "reactstrap"
//import type { ITask } from "../Interfaces/ITask"
import { useGetTask } from "../hooks/data"







export const TaskItem = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const { task } = useGetTask(id);
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
                                <Button color="secondary" onClick={() => { navigate("/") }}>Volver</Button>
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