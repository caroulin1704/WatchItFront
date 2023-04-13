import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHome from './NavBarHome';
import Signup from './Signup';
import NavBar from '../componants/NavBar.js';


function App() {
  return (
    <Signup />
  );
}

export default App;
