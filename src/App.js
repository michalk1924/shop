import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Page from './components/Page/Page.jsx';
import Home from './components/Home/Home.jsx';

export const Categories = Object.freeze({
  JEWELERY: 'jewelery',
  ELECTRONICS: 'electronics',
  MENSCLOTHING: `men's clothing`,
  WOMENSCLOTHING: `women's clothing`,
  BOOKS: 'books',
});

function App() {
  
  return (
    <div className="App">
      <div className='header'>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/men's clothing">Men's Clothing</Link>
        <Link to="/women's clothing">Women's Clothing</Link>
        <Link to="/books">Books</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jewelery" element={<Page catgory={Categories.JEWELERY} />} />
        <Route path="/electronics" element={<Page catgory={Categories.ELECTRONICS} />} />
        <Route path="/men's clothing" element={<Page catgory={Categories.MENSCLOTHING} />} />
        <Route path="/women's clothing" element={<Page catgory={Categories.WOMENSCLOTHING} />} />
        <Route path="/books" element={<Page catgory={Categories.BOOKS} />} />
      </Routes>
    </div>
  );
}

export default App;
