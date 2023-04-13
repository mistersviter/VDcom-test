import SignIn from '../SignIn/SignIn';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={Profile} />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
