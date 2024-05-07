import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Products from './pages/Products';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App