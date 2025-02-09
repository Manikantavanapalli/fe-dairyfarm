import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/AboutPage";
import Products from "../pages/Products";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
