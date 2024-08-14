import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/search" element=<Search /> />
        <Route path="/search/details" element=<Details /> />
        <Route path="/login" element=<Login /> />
      </Routes>
    </Router>
  );
};

export default AppRouter;
