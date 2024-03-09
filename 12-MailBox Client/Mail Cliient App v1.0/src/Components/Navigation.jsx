
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginForm';
import Signup from './SignupForm';
import Header from './Header';
import Home from './Home';
import Inbox from './Inbox';
import Compose from './Compose';

const Navigation = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/inbox" element={<Inbox />} />
      <Route exact path="/compose" element={<Compose />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Navigation