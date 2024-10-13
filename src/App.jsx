
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Home from './Home';
import Input from './Input';
import Show from './Show';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
<Router>
  <nav className="nav  bg-info  text-black fixed-top px-4 py-2">
    <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/Show">Show</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/show" element={<Show />} />
        </Routes>
        
      </Router>
    
  );
}

export default App;
