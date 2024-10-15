import logo from './logo.svg';
import './App.css';
import Jewelery from './components/Jewelery/Jewelery.jsx';
import Electronics from './components/Electronics/Electronics.jsx';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
      </div>

      <Routes>
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;
