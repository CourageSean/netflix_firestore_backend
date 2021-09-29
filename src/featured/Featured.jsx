import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import './featured.scss';

export default function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre' className='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
  <option value='action'>Action</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>HIstorical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        // width='100%'
        src='https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt=''
      />

      <div className='info'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
          alt=''
        />
        <span className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          velit natus nemo nihil eum praesentium voluptatem tempora laborum sint
          reprehenderit labore voluptatum qui, neque velit?
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
