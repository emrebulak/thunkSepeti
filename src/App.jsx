import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Products from './pages/Products';
import Header from './components/Header';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App