import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Items from './components/Items.jsx';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/men's clothing">Men's Clothing</Link>
        <Link to="/women's clothing">Women's Clothing</Link>
      </div>

      <Routes>
        <Route path="/jewelery" element={<Items catgory={'jewelery'} />} />
        <Route path="/electronics" element={<Items catgory={'electronics'} /> } />
        <Route path="/men's clothing" element={<Items catgory={`men's clothing`} /> } />
        <Route path="/women's clothing" element={<Items catgory={`women's clothing`} /> } />
      </Routes>
    </div>
  );
}

export default App;
