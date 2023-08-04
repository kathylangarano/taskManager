import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import roles from "../helpers/roles";


export const AuthContext = createContext()

export default function AuthProvider({children}){


   const history = useNavigate (); 
   const [user,setUser] = useState();
   

   const login = (userCredentials, fromLocation) =>{

        setUser({id:10, name: 'Kathy', email: 'Kathylangarano@outlook.es', role: roles.admin});
        if(fromLocation){
        history.push({fromLocation});
        }
    }
    
   const logout = () => setUser(null) ;

   const updateUser = (data) => {
       setUser({
            ...user,
            ...data
       })
   }



   const isLogged = () => !!user;
   const hasRole =(role) => user?.role === role;
   
     const contextValue = {
        user,
        updateUser,
        isLogged,
        hasRole,
        login,
        logout,
    };
    return(
        <AuthContext.Provider value={contextValue}>
            {children}  

        </AuthContext.Provider>
    )
}