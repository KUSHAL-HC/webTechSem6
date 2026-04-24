import './App.css';
import Home from './Home';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './Navbar';
import Profile from './Profile';
import Contact from './Contact';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
