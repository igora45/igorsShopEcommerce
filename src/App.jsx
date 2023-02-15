import { useState } from 'react';
import { Home } from './pages/Home';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import { ProductList } from './pages/ProductList';
import { Announcement } from './components/Announcement';
import { Product } from './pages/Product';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { WishList } from './pages/WishList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
