import './App.css';
import Home from './component/Home';
import { Navbar } from './component/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/" 
    </Routes>
    
    </>
  );
}

export default App;
