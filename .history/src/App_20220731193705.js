import './App.css';
import Home from './component/Home';
import { Navbar } from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import { Products } from './component/Products';
import Goods from './component/Goods';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Products" element={<Products />} /> 
     <Route path="/products/:id" element={<Goods />} />
     <Rout path="/contact" 
    </Routes>
    
    </>
  );
}

export default App;
