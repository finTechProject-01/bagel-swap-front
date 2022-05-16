import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import logo from "./logo.svg";
import "./App.scss";

import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexts/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ErrorPage from './pages/ErrorPage'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    hasAuthenticated().tokenValid
  );
  const [roles, setRoles] = useState(hasAuthenticated().roles);
  const [email, setEmail] = useState(hasAuthenticated().email);
  const [showLogin, setShowLogin] = useState();

  return (
    <Auth.Provider
      value={{
        isAuthenticated,setIsAuthenticated,
        roles,setRoles,
        email,setEmail,
        showLogin,setShowLogin,
      }}
    >
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </Auth.Provider>
  );
}

export default App;
