import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from './Components/Footer'


function App() {


  return (
    <div className="overflow-x-hidden bg-bg">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path={'/'} element={
            <Home />
          } />
          <Route path={'/'} element={
            <Home />
          } />
          <Route path={'/'} element={
            <Home />
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
