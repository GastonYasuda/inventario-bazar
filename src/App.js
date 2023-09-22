import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiProvider from './Context/ApiContext';
import Home from './View/Home/Home';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>

  );
}

export default App;
