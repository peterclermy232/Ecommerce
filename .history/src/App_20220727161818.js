import './App.css';
import Home from './component/Home';
import { Navbar } from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import { Products } from './component/Products';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Products" element={<Products />} /> 
     <Rou
    </Routes>
    
    </>
  );
}

export default App;