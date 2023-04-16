import { useState } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Profile.css';
import ProfileContent from './ProfileContent/ProfileContent';

export default function Profile() {
  const [activePage, setActivePage] = useState<string>('contacts');

  return (
    <div className='profile'>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <Header activePage={activePage} />
      <ProfileContent activePage={activePage} />
    </div>
  );
}
