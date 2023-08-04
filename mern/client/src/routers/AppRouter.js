import {Routes, Route} from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";
//import PrivateRoute from "./PrivateRoute";
//import PublicRoute from "./PublicRoute";
//import { useState } from "react";
import roles from "../helpers/roles";
import routes from "../helpers/routes";

export default function AppRouter(){
    //const [isLogged]= useState(false)
    return(
        
            <Routes>
                <Route path={routes.home} element={<HomePage/>}/>
                <Route  path={routes.login} element={<LoginPage />}/>
                <Route  path={routes.register} element={<RegisterPage/>}/>


                
                <Route  path={routes.account} element={< AccountPage/>}/>
                
                
                <Route  path={routes.projects} element={<ProjectsPage/>}/>
                
            
                <Route path={routes.project()} element={<ProjectPage/>}/>
             
                
                <Route  hasRole={roles.admin} path={routes.admin.users} element={<UsersPage/>}/>
                

                <Route  path='*' element={<NotFoundPage/>}/>
            </Routes> 
            
        
       
    )
}

               //<Route element={<PrivateRoute isLogged={isLogged} />}>
                //<Route  path={routes.account} element={< AccountPage/>}/>
               // </Route>
               // <Route element={<PrivateRoute isLogged={isLogged} />}>
                //<Route  path={routes.projects} element={<ProjectsPage/>}/>
              //  </Route>
               // <Route element={<PrivateRoute isLogged={isLogged} />}>
               // <Route path={routes.project()} element={<ProjectPage/>}/>
               // </Route>
               // <Route element={<PrivateRoute isLogged={isLogged} />}>
               // <Route  hasRole={roles.admin} path={routes.admin.users} element={<UsersPage/>}/>
               // </Route>