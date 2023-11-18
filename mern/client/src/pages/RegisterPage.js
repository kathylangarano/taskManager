import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import routes from '../helpers/routes';
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";


// Add the brand icons to the library
library.add(fab);

const userCredentials ={};

export default function RegisterPage(){
    const location = useLocation();
    const {login} = useAuth();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return(
        <div>
            <section className="vh-100">       
  <div className="container py-5 h-100">
    <div className="row align-items-center justify-content-center h-100">
    <div className="col-md-12 col-lg-6 mb-4">
    <form>
    <div className="text-center mb-4">
    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <a href="https://www.facebook.com/login/">
                  <button type="button" className="btn btn-link btn-floating mx-1">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                  </button>
                </a>

                <a href="https://accounts.google.com/v3/signin/identifier?hl=es&ifkv=AVQVeyy8sRvWu7Fti9zdltfSaG3x-ubpLMjXuH1yU2taPffy1b0E6NdykWNioe5NmtOlFJKB0VtLCw&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1946173896%3A1700247863785906&theme=glif">
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <FontAwesomeIcon icon={['fab', 'google']} />
                </button>
                </a>

                <a href="https://twitter.com/">
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </button>
                </a>

                <a href="https://github.com/">
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </button>
                </a>
              </div>
              <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          
            <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

           
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked={isChecked} onChange={handleCheckboxChange}/>
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>
              <Button as ={Link} to={routes.projects} ype="button" className="btn btn-primary btn-lg btn-block w-100 mb-4" type="submit" onClick={() => RegisterPage(userCredentials, location.state?.from)}>Sign up</Button>
        </form>
      </div>
      <div className="col-md-12 col-lg-6 mb-4">
      <img className="img-fluid" src='/img/signup.svg' alt='gestor-de-tareas'/>
      </div>
      
    </div>
  </div>
</section>
        </div>
     
    )
}




