import './App.css';
import Home from './component/Home';
import { Navbar } from './component/Navbar';
import {Routes, Route} from 'react-router'

function App() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;
