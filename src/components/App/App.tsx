import SignIn from '../SignIn/SignIn';
//import authApi from '../../utils/AuthApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Profile from '../Profile/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const goTo = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
      goTo(location.pathname);
    }
  }, []);

  // Обработчик логина пользователя
  const handleLogin = (data: any) => {
    setIsLoggedIn(true);
    goTo('/');
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<ProtectedRoute isLoggedIn={isLoggedIn} element={Profile} />}
        />
        <Route path='/sign-in' element={<SignIn onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
