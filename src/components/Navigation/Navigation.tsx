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

interface INavigationProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navigation({
  activePage,
  setActivePage,
}: INavigationProps) {
  const dispatch = useAppDispatch();
  return (
    <div className='navigation'>
      <div className='navigation__layout'>
        <Logo />
        <nav className='navigation-menu'>
          <ul className='navigation-menu__list'>
            <li className='navigation-menu__item'>
              <button
                className={`navigation-menu__button ${
                  activePage === 'contacts' && 'navigation-menu__button_active'
                }`}
                onClick={() => setActivePage('contacts')}
              >
                <MdOutlineContacts className='navigation-menu__icon' />
                Total Contacts
              </button>
            </li>
            <li className='navigation-menu__item'>
              <button
                className={`navigation-menu__button ${
                  activePage === 'calendar' && 'navigation-menu__button_active'
                }`}
                onClick={() => setActivePage('calendar')}
              >
                <MdOutlineDateRange className='navigation-menu__icon' />
                Calendar
              </button>
            </li>
            <li className='navigation-menu__item'>
              <button
                className={`navigation-menu__button ${
                  activePage === 'report' && 'navigation-menu__button_active'
                }`}
                onClick={() => setActivePage('report')}
              >
                <MdOutlineDataSaverOff className='navigation-menu__icon' />
                Project Report
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='logout'>
        <button className='logout-btn' onClick={() => dispatch(logout())}>
          <MdOutlineLogout className='logout-btn__icon' />
          Log out
        </button>
      </div>
    </div>
  );
}
