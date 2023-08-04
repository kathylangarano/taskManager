import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
// import routes from '..helpers/admin/routes';

export default function UsersPage(){
    return( 
        <Container>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span: 6}} className="m-5">
                
                <h2>Users </h2>
                <p>¡gestionar tus proyectos!</p>
                <p>
                    Marca . 
                </p>
                {/* <div>
                   <Link  to={routes.login}>Ingresa</Link> o <Button as ={Link} to={routes.register} className='ml-1'>Crea una cuenta</Button>
                </div> */}
                </Col>
                <Col>

                <img className="img-fluid" src='/img/users-card.svg' alt='projects'/>
                <p>¡Gestiona tu tiempo,mejora tu proactividad!</p>
                </Col>
            </Row>
            
        </Container>
    );
}