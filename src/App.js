import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/home/index';
import Login from './pages/login/login';
import User from './pages/user/user';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
           <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
