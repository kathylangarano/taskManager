    import { Container, Row, Col } from "react-bootstrap";
    import {Link} from 'react-router-dom';
    import routes from '../helpers/routes';

    export default function NotFoundPage(){
        return(
            <Container>
                <Row className="mt-5">
                    <Col md={{span:10, offset: 2}} className="text-center">
                    <img  style={{width: '100%'}} src="/img/404-not-found.svg" alt="error-404"/>
                    <h2>¿Te has perdido?</h2>
                    <p>
                        Vuelve al <Link to={routes.home}>Inicio</Link>
                    </p>
                    </Col>
                </Row>
                
            </Container>
        );
    }