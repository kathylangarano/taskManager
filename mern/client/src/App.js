import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import{BrowserRouter as Router} from 'react-router-dom';
import Layout from "./components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import React, { Component } from 'react';
import Calendar from 'react-calendar';

function App() {
  
  return (
    <div>
      <Router>

        <AuthProvider>

        <Layout>
          <AppRouter/>
        </Layout>

        </AuthProvider>
     </Router>
     <ToastContainer/>
    </div>
  );
}

export default App;



