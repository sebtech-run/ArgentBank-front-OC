import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/home/index';
import Login from './pages/login/login';
import ProfileUser from './pages/user/profileUser';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="login" element={<Login />} />
           <Route path="user" element={<ProfileUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
