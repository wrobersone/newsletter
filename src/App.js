import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/HomePage";
import Footer from "./components/common/footer/Footer";
import Culture from "./components/culture/Culture";
import SinglePage from "./components/singlePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
