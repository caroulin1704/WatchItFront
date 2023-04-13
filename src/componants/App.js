import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import '../componants/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHome from './NavBarHome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<NavBarHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
