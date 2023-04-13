import { Navigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';

const ProtectedRoute = ({ element: Component }: any) => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn
  );
  return isLoggedIn ? <Component /> : <Navigate to='/sign-in' />;
};

export default ProtectedRoute;
