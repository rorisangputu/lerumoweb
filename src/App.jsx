import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from './Components/Footer'
import About from './Pages/About';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';


function App() {


  return (
    <div className="overflow-x-hidden bg-bg font-poppins">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/about" element={
            <About />
          } />
          <Route path="/services" element={
            <Services />
          } />
          <Route path="/contacts" element={
            <Contacts />
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
