import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VinNavbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Launch from './components/Launch';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <VinNavbar/>
      <Card>
            <Card.Body>
      <div className="container">
    <BrowserRouter>
    <Routes>
    
      <Route exact path="/launch" element={<Launch/>}> </Route>
      <Route exact path="/login" element={<Login/>}> </Route>
      <Route exact path="/home" element={<Home/>}> </Route>
      <Route exact path="/" element={<Launch/>}> </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
    </Card.Body>
    </Card>
    </div>
  );
}

export default App;
