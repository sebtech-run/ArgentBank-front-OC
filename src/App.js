import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/home/index';
import Login from './pages/login/login';
import ProfileUser from './pages/user/profileUser';
import Error from './pages/error/error';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<ProfileUser />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
