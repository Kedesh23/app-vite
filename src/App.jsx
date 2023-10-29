import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/About';
import Login from './components/Login';
import Students from './components/Students';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={<Home />}
        />

        <Route path='/about'
          element={<About />}
        />

        <Route path='/login'
          element={<Login />}
        />

        <Route path='/students'
          element={<Students />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
