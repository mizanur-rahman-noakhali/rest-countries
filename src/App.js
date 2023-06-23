import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
   <Router>
    <Routes>
    <Route  path="/home" element={<Home/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/name/:name" element={<CountryDetail/>}/>
    <Route  path="*" element={<NoMatch/>}/>  
    </Routes>
   </Router>
  );
}

export default App;
