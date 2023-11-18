import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import routes from '../helpers/routes';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas  } from '@fortawesome/free-solid-svg-icons';


// Add the brand icons to the library
library.add(fas); 

function TaskNotification() {
  const [tasks, setTasks] = useState([
      { id: 1, title: 'Tarea 1', completed: false },
      { id: 2, title: 'Tarea 2', completed: false },
    ]);
    const [unreadTasks, setUnreadTasks] = useState(0);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
      if (!task.completed) {
        // Marcar la tarea como leída
        const updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, completed: true } : t));
        setTasks(updatedTasks);
        setUnreadTasks(unreadTasks - 1);
      }
      setSelectedTask(task);
    };
  return (
    <div>
     
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="notificationDropdown"
                  role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                 <FontAwesomeIcon icon={['fas', 'bell']} />
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
      <div>
        <span onClick={() => setSelectedTask(null)}>
         {unreadTasks > 0 ? `(${unreadTasks})` : ''}
        </span>
      </div>
    </div>
  );
}



export default function ProjectsPage(){
    const [calDate, setCalDate] = useState(new Date());
    const [userResults, setUserResults] = useState([]);

    function onChange (calDate) {
        setCalDate(calDate)
    
            const filteredResults = userResults.filter(result => {
            const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
            const newCalDateFormat = calDate.toLocaleString().split(",")[0]
            return newResultFormat === newCalDateFormat
        })
    }
    const [taskValue, setTaskValue] = useState(""); // Define el estado para el valor del campo

    // Agrega un manejador para el evento onChange
    const handleTaskChange = (event) => {
      setTaskValue(event.target.value);
    };
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);}

      const [showCardBody, setShowCardBody] = useState(false);
      const [tasks, setTasks] = useState([]);

  const handleShowCardBody = () => {
    setShowCardBody(true);
  };

  const handleAddTask = () => {
    // Agregar una nueva tarea con un ID único
    const newTask = { id: Date.now(), title: 'Nueva tarea', completed: false };
    setTasks([...tasks, newTask]);
  };
    
    return(
        <Container>
            
            {/* <!--Main Navigation--> */}
<header>

  {/* <!-- Navbar --> */}
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white">
    {/* <!-- Container wrapper --> */}
    <div className="container-fluid">

      {/* <!-- Search form --> */}
      <form className="d-none d-md-flex input-group w-auto my-auto">
        <input  id='searchForm' autoComplete="off" type="search" className="form-control rounded" placeholder='Search (ctrl + "/" to focus)'
          style={{ minWidth: "225px" }} />
        <span className="input-group-text border-0"><FontAwesomeIcon icon={['fas', 'search']} /> </span> 
      </form>

      {/* <!-- Right links --> */}
      <ul className="navbar-nav ms-auto d-flex flex-row">
        {/* <!-- Notification dropdown --> */}
        

        
        <li className="nav-item dropdown">
                  {/* Renderizar la campanita y contador desde TaskNotification */}
                  <TaskNotification />
                
              </li>


        {/* <!-- Avatar --> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="avatarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height="22" alt="Avatar"
              loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
            <li><a className="dropdown-item" href="#">My profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
  </nav>
  

  
</header>


            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" href="#!">Personal tasks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Work tasks</a>
                    </li>
                    </ul>
                </div>
                

                <Row className="mt-3">
                <Col xs={{span:12}} md={{span: 6}} className="m-5">  
                <Col className="d-flex justify-content-center">
                <div className="result-calendar mb-6 ">
                    <Calendar onChange={onChange} value={calDate} />
                </div>

                </Col>
                

                
                </Col>
                <Col>
                <img className="img-fluid" src='/img/projects.svg' alt='projects'/>
                <p>¡Manage your time, improve your proactivity!</p>
                
                </Col>
                
            </Row>
        
                <div className="card-footer">
                    <h5 className="card-title">Clear your mind</h5>
                    <p className="card-text">A swift solution to clear your mental space of tasks.</p>

          {showCardBody && (
            <div className="card w-75 mb-4 mt-5">
                  <div className="card-body">
                  
                    
                    <span className="addToTop centerColumn-item" style={{marginLeft:'24px', marginRight:'24px', zindex: '2' }}>
                <div className="baseAddParent addTask taskCreation focused" style={{overflow: 'hidden', flexShrink: '0', display: 'flex', flexDirection:'column', boxShadow:'0px 0.3px 0.9px rgba(0,0,0,0.1), 0px 1.6px 3.6px rgba(0,0,0,0.1)', boxShadow:'0px 0.3px 0.9px var(--bg-shadow),0px 1.6px 3.6px var(--bg-shadow)', backgroundColor:'#fff', backgroundColor:'var(--bg-primary)'}}>
                <div className="baseAdd addTask focused taskCreation" style={{minHeight:'52px', padding:'0 16px', overflow: 'hidden', position: 'relative',flexShrink:'0', display:'flex', alignItems:'center'}}>
                <button className="baseAdd-icon addTask" type="button" aria-label="Add a task" tabIndex="0" style={{flexShrink:'0', flexBasis:'0', cursor:'pointer', border:'none', background:'none'}}>
                <svg className="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor" style={{marginLeft:'6px', color:'#2564cf', color:'var(--font-color-brand)', display:'flex'}}></path></svg>
                </button>
                
                <span id="baseAddInput-addTask-description" className="screenreader-only" style={{position: 'absolute', width: '1px', whiteSpace:'nowrap', height: '1px',overflow: 'hidden',border: '0',padding: '0', clip: 'rect(0 0 0 0)', WebkitClipPath:'inset(50%)', clipPath: 'inset(50%', margin: '-1px'}}></span>
                <input id="baseAddInput-addTask-today" className="baseAdd-input taskCreation expanded" aria-label="List My Day, Press shift+tab to access List options" aria-describedby="baseAddInput-addTask-description" type="text" maxLength="255" placeholder="Add a task" tabIndex="0" autoComplete="off" value={taskValue} onChange={handleTaskChange} style={{ backgroundColor:'#fff', backgroundColor:'var(--bg-tertiary)', height:'40px', borderRadius:'2px', padding:'16px 14px', fontSize:'1.4rem', lineHeight:'20px', transition:'none', border:'none'}}/>
                </div>


                <div className="baseAdd addTask taskCreation focused rich-entry entered " style={{height:'44px', padding:'0px 16px', display: 'flex', transition:'height 200ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s', overflow:'hidden', position:'relative' }}>
                <div className="taskCreation-entrybar" style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', overflowX:'auto' }}>

                <div className="dateButton-container" style={{display:'flex', marginLeft:'2px' }}>
                <button className="dateButton" aria-haspopup="true" style={{fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', background:'none', width:'100%', height:'100%', border:'none', boxShadow:'none', WebkitFontSmoothing:'antialiased'}}>
                <div >
                <div className="ms-TooltipHost root-42" style={{display:'inline'}}>
                <div className="taskCreation-labelcontainer" style={{display:'center', alignItems:'center', flexDirection:'row', padding:'4px'}}>
                <div className="taskCreation-icon" style={{display:'block'}}>
                <svg className="fluentIcon dateButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z" fill="currentColor">
                </path></svg>
                </div>
                <div className="dueDate-text isPlaceHolderText" style={{display:'block', fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', WebkitFontSmoothing:'antialiased'}}>
                <span className="screenreader-only" style={{position: 'absolute', width: '1px', whiteSpace:'nowrap', height: '1px',overflow: 'hidden',border: '0',padding: '0', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%', margin: '-1px'}}>Add due date</span>
                </div>
                </div>
                </div>
                </div>
                </button>
                </div>


                <div className="reminderButton-container" style={{display:'flex', marginLeft:'2px' }}>
                <button className="reminderButton" aria-haspopup="true" style={{fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', background:'none', width:'100%', height:'100%', border:'none', boxShadow:'none', WebkitFontSmoothing:'antialiased'}}>   
                <div>
                <div className="ms-TooltipHost root-41" style={{display:'inline'}}>
                <div className="taskCreation-labelcontainer" style={{display:'center', alignItems:'center', flexDirection:'row', padding:'4px'}}>
                <div className="taskCreation-icon" style={{display:'block'}}>
                <svg className="fluentIcon reminderButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z" fill="currentColor">
                </path></svg>
                </div>
                <div className="reminderDate-text isPlaceHolderText" style={{display:'block', fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', WebkitFontSmoothing:'antialiased'}}>
                <span className="screenreader-only" style={{position: 'absolute', width: '1px', whiteSpace:'nowrap', height: '1px',overflow: 'hidden',border: '0',padding: '0', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%', margin: '-1px'}}>Remind me</span>
                </div>
                </div>
                <div id="tooltip9" style={{position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0px', border: '0px', overflow: 'hidden'}}>Remind me</div>
                </div>
                </div>
                </button>
                </div>

                <div className="recurringButton-container" style={{display:'flex', marginLeft:'2px' }}>
                <button className="recurringButton" aria-haspopup="true" style={{fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', background:'none', width:'100%', height:'100%', border:'none', boxShadow:'none', WebkitFontSmoothing:'antialiased'}}>
                <div>
                <div className="ms-TooltipHost root-42" style={{display:'inline'}}>
                <div className="taskCreation-labelcontainer" style={{display:'center', alignItems:'center', flexDirection:'row', padding:'4px'}}>
                <div className="taskCreation-icon" style={{display:'block'}}>
                <svg className="fluentIcon recurringButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z" fill="currentColor"> 
                </path></svg>
                </div>
                <div className="recurrence-text isPlaceHolderText" style={{display:'block', fontFamily:'Segoe, "Segoe UI", Arial, "sans-serif"', WebkitFontSmoothing:'antialiased'}}>
                <span className="screenreader-only" style={{position: 'absolute', width: '1px', whiteSpace:'nowrap', height: '1px',overflow: 'hidden',border: '0',padding: '0', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%', margin: '-1px'}} >Repeat</span>
                </div>
                </div>
                <div id="tooltip10" style={{position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0px', border: '0px', overflow: 'hidden'}}>Repeat</div>
                </div>
                </div>
                </button>
                </div>
                </div>
                <button href="#"  aria-label="Add" className="btn btn-primary " tabIndex="-1" disabled="" style={{marginLeft:'auto', right:'0'}}>Add</button>
                </div>
                </div>
                </span>
                  </div>
                </div>
          
        )}          
          <a href="#" className="btn btn-primary" onClick={handleShowCardBody}>
            Add new Task
          </a>
          
                </div>
         </div>
            
            
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
