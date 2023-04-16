import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { filterContacts } from '../../slices/userSlice';
import UserInfo from '../UserInfo/UserInfo';
import './Header.css';
import { MdSearch } from 'react-icons/md';

interface IHeaderProps {
  activePage: string;
}

export default function Header({ activePage }: IHeaderProps) {
  const userContacts = useAppSelector((state) => state.user.contacts);
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => {
    const filteredContacts = userContacts!.filter((contact) => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    dispatch(filterContacts(filteredContacts));
  };

  return (
    <div className='header'>
      {activePage === 'contacts' && (
        <div className='search'>
          <MdSearch className='search__icon' />
          <input
            type='search'
            placeholder='Search by Name...'
            className='search__input'
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      )}
      <UserInfo />
    </div>
  );
}
