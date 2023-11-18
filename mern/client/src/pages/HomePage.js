import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import routes from '../helpers/routes';

export default function HomePage(){
    return(
        <Container>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span: 6}} className="m-5">
                
                <h2>Bienvenid@ to Task Manager</h2>
                <p>¡Here you can manage your projects!</p>
                <p>
                    Mark your tasks as completed, add, delete, or update. 
                </p>
                <div>
                   <Link  to={routes.login}>Enter</Link> or <Button as ={Link} to={routes.register} className='ml-1'>Create an account</Button>
                </div>
                </Col>
                <Col>

                <img className="img-fluid" src='/img/task-manager.svg' alt='gestor-de-tareas'/>
                <p>¡Manage your time, enhance your proactivity!</p>
                </Col>
            </Row>
            
        </Container>
    );
}
