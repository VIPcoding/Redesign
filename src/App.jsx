import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Dataanalytics from "./pages/Dataanalytics";
import Marketresearch from "./pages/marketresearch";

// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />                                             
          <Route path="/dataanalytics" element={<Dataanalytics />} />                                             
          <Route path="/Marketresearch" element={<Marketresearch />} />                                                                            
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
