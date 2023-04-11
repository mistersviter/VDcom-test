import Logo from '../Logo/Logo';

export default function SignIn(props: any) {
  const { onLogin } = props;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get('username'),
      password: data.get('password'),
    };
    onLogin(user);
  };

  return (
    <>
      <Logo />
      <div className='form'>
        <form>
          <div className='input-container'>
            <label>Username </label>
            <input type='text' name='username' required />
            {/* {renderErrorMessage('username')} */}
          </div>
          <div className='input-container'>
            <label>Password </label>
            <input type='password' name='password' required />
            {/* {renderErrorMessage('password')} */}
          </div>
          <div className='button-container'>
            <input type='submit' />
          </div>
        </form>
      </div>
    </>
  );
}
