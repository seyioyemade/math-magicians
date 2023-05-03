import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/quote';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<div className="page-not-found">Page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
