import { useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../slices/userSlice';
import Logo from '../Logo/Logo';
import {
  MdOutlineContacts,
  MdOutlineDateRange,
  MdOutlineDataSaverOff,
  MdOutlineLogout,
} from 'react-icons/md';
import './Navigation.css';

export default function Navigation() {
  const dispatch = useAppDispatch();
  return (
    <div className='navigation'>
      <div className='navigation__layout'>
        <Logo />
        <nav className='navigation-menu'>
          <ul className='navigation-menu__list'>
            <li className='navigation-menu__item'>
              <button className='navigation-menu__button navigation-menu__button_active'>
                <MdOutlineContacts />
                Total Contacts
              </button>
            </li>
            <li className='navigation-menu__item'>
              <button className='navigation-menu__button'>
                <MdOutlineDateRange />
                Calendar
              </button>
            </li>
            <li className='navigation-menu__item'>
              <button className='navigation-menu__button'>
                <MdOutlineDataSaverOff />
                Project Report
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='logout'>
        <button className='logout-btn' onClick={() => dispatch(logout())}>
          <MdOutlineLogout />
          Log out
        </button>
      </div>
    </div>
  );
}
