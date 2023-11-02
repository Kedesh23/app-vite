import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/About';
import Login from './components/Login';
import Students from './components/Students';
import Classroom from './components/Classroom';
import PostClassroom from './components/PostClassroom';

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

        <Route path='/classroom'
          element={<Classroom />}
        />

        <Route path='/classe'
          element={<PostClassroom />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
