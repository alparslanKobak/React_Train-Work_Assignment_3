
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  return (
    <>
      <div id='canvas'>
        <div id='box_wrapper'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 

            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>


    </>
  );
}

export default App;
