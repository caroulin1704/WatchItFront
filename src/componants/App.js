import '../styles/App.css';
import '../componants/NavBar.js';
import NavBar from '../componants/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHome from './NavBarHome';


function App() {
  return (
    <div className="App">
       <NavBar />
       <NavBarHome />
    </div>
  );
}

export default App;
