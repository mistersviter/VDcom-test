import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { login } from '../../slices/userSlice';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Logo from '../Logo/Logo';
import './SignIn.css';
import { db } from '../../utils/constants/constants';

interface IUser {
  login: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [unsuccessfulLogin, setUnsuccessfulLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentUser: IUser = {
      login: data.get('login'),
      password: data.get('password'),
    };

    signIn(currentUser);
  };

  function signIn(currentUser: IUser) {
    const userData = db.users.find((user) => user.login === currentUser.login);

    if (userData) {
      if (userData.password !== currentUser.password) {
        setUnsuccessfulLogin(true);
      } else {
        setUnsuccessfulLogin(false);
        dispatch(login(userData));
        navigate('/');
      }
    } else {
      setUnsuccessfulLogin(true);
    }
  }

  return (
    <div className='content'>
      <Logo />
      <p className='greeting'>Welcome To CRM System Sign In To Your Account</p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__inputs-container'>
          <div className='form__input-container'>
            <label className='form__input-label'>Login</label>
            <input type='text' name='login' required className='form__input' />
          </div>
          <div className='form__input-container'>
            <label className='form__input-label'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              required
              className='form__input'
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className='form__show-password'
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiOutlineEye
                className='form__show-password'
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        {unsuccessfulLogin && <span>Неправильный логин или пароль</span>}
        <button type='submit' className='form__submit-btn'>
          SIGN IN
        </button>
      </form>
    </div>
  );
}
