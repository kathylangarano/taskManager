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

export default function LoginPage(){
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
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-12 col-lg-6">

        <form>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-4">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <a href="https://www.facebook.com/login/"><button type="button" className="btn btn-primary btn-floating mx-1">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </button></a>    

            <a href="https://twitter.com/"><button type="button" className="btn btn-primary btn-floating mx-1"> 
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            </button></a>     

            <a href="https://www.linkedin.com/login"><button type="button" className="btn btn-primary btn-floating mx-1">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </button></a>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

          
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            
            <div className="form-check">
              <input className="form-check-input"  type="checkbox" value="" id="form1Example3" checked={isChecked} onChange={handleCheckboxChange}/>
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <Button as ={Link} to={routes.projects} ype="button" className="btn btn-primary btn-lg btn-block w-100" type="submit"  onClick={() => login(userCredentials, location.state?.from)}>Sign in</Button>

          <div className="d-flex align-items-center justify-content-center mt-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Button as ={Link} to={routes.register} ype="button" className="btn btn-primary">Create new</Button>
                  </div>

        </form>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
