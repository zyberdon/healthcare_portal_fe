
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/login";
import Services from "./components/Services";
import HealthTopics from "./components/HealthTopics";
import Contact from "./components/contact";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function LocalRoutes(props) {
    console.log(props)
    return (<div>
        <Router>
            {!props.loggedin && <Header {...props} />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/healthtopics" element={<HealthTopics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router></div>
    );
}

export default LocalRoutes;