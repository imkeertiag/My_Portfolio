import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { Navbar } from "./Components/Navbar" ;
import { Recommendation } from "./Components/Recommendation";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import { Skills } from "./pages/Skills";
import { Error } from "./pages/Error";

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* Navbar as Components is added to each page of the website */}
    <Navbar />
    <Routes>
      {/* these are route to each page of the website */}
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/recommendations" element={<Recommendation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      {/* I have also provided Error 404 page which we will gti if we land to a route other than above ,, used wildcard (*) for that */}
      <Route path="*" element={<Error />} />
    </Routes>
    {/* Footer as Components is added to each page of the website */}
    <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
