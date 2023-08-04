import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import routes from '../helpers/routes';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ProjectsPage(){
    const [calDate, setCalDate,userResults] = useState(new Date())

    function onChange (calDate) {
        setCalDate(calDate)
    
            const filteredResults = userResults.filter(result => {
            const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
            const newCalDateFormat = calDate.toLocaleString().split(",")[0]
            return newResultFormat === newCalDateFormat
        })
    }
    return(
        <Container>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span: 6}} className="m-5">
                
                <h2>Proyectos </h2>
                <p>¡gestionar tus proyectos!</p>
                <p>
                   WORK IN PROGRESS
                </p>
                <div className="result-calendar">
                    <Calendar onChange={onChange} value={calDate} />
                </div>
                
                </Col>
                <Col>

                <img className="img-fluid" src='/img/projects.svg' alt='projects'/>
                <p>¡Gestiona tu tiempo,mejora tu proactividad!</p>
                </Col>
            </Row>
            
        </Container>
    );
}


// state = {
//     date: new Date(),
//   }

//   onChange = date => this.setState({ date })

//   render() {

// <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
