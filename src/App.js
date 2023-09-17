import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiProvider from './Context/ApiContext';
import ItemListContainer from './View/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>

  );
}

export default App;
