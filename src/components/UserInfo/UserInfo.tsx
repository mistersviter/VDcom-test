import { useAppSelector } from '../../hooks/hooks';
import './UserInfo.css';
import defaultAvatar from '../../assets/default_avatar.png';

export default function UserInfo() {
  const currentUser = useAppSelector((state) => state.user);

  return (
    <div className='user-info'>
      <img
        src={currentUser.avatar ? currentUser.avatar : defaultAvatar}
        alt='avatar'
        className='user-info__avatar'
      />
      <div className='user-info__text'>
        <span className='user-info__name'>{`MR. ${currentUser.name}`}</span>
        <span className='user-info__position'>{currentUser.position}</span>
      </div>
    </div>
  );
}
