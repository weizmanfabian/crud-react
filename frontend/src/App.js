import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <header className=''>
        <h1>App de Blogs</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Blog />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
