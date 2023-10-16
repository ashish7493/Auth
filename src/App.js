import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <>
      <Router>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Homepage />} /> 
      </Routes>
      </Router>
      </>
      ) ;
  
}

export default App;