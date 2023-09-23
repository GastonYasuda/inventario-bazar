import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiProvider from './Context/ApiContext';
import Home from './View/Home/Home';
import ByBrand from './View/ByBrand/ByBrand';
import ProductContainer from './View/ProductContainer/ProductContainer';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/byBrand/:byBrandId' element={<ByBrand />} />
          <Route path='/product/:brandId/:productId' element={<ProductContainer />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>

  );
}

export default App;
