import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Genios from './components/genio';
import Scroll from './components/Scroll';
function App() {
  return ( 


      <Router>
         <NavBar />
        <Routes>
           <Route path='/' element={<Home />}/>
        </Routes>
        <Genios />
        <Scroll />
      </Router>
      
  
     
  );
}

export default App;
