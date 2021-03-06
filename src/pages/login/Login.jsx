import './login.scss';
import { useState, useRef } from 'react';

export default function Login() {
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
            alt=''
          />
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input type='email' placeholder='email' className='input' />
          <input type='password' placeholder='password' />
          <button className='loginButton'>Sign In</button>
          <span>
            New to Chill with Sean??? <b>Sign up now</b>{' '}
          </span>
        </form>
      </div>
    </div>
  );
}
