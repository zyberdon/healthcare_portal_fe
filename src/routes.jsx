
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Services from "./components/Services";
import Contact from "./components/contact";
import HealthTopics from "./components/HealthTopics";

function LocalRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/healthtopics" element={<HealthTopics />} />
            </Routes>
        </Router>
    );
}

export default LocalRoutes;