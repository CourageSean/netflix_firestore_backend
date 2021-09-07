import './navbar.scss';
import { useState } from 'react';
import Slider from './Slider';
import {
  Search,
  Notifications,
  ArrowDropDown,
  TvOutlined,
  TheatersOutlined,
  HomeOutlined,
  ListAltOutlined,
  SentimentVerySatisfiedOutlined,
  NewReleasesOutlined,
} from '@material-ui/icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <Slider />
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <span>
            {' '}
            <HomeOutlined /> Homepage
          </span>
          <span>
            {' '}
            <TvOutlined /> Series
          </span>
          <span>
            <SentimentVerySatisfiedOutlined />
            Animes
          </span>
          <span>
            <TheatersOutlined />
            Movies
          </span>
          <span>
            {' '}
            <NewReleasesOutlined /> New and Popular
          </span>
          <span>
            {' '}
            <ListAltOutlined /> My List
          </span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <Notifications className='icon' />
          <img
            src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />

          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
