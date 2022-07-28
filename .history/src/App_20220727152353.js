import './App.css';
import Home from './component/Home';
import { Navbar } from './component/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
     <Route <Home />
    </Routes>
    
    </>
  );
}

export default App;
