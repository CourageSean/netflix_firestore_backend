import { useState } from 'react';
import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from '@material-ui/icons';

export default function ListItem({ index }) {
  const [isHovered, setisHovered] = useState(false);
  const trailer =
    '<iframe width="853" height="480" src="https://www.youtube.com/embed/FzWG8jiw4XM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img src='https://wallpapercave.com/wp/wp5758736.jpg' alt='' />

      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <iframe
            width='853'
            height='480'
            src='https://www.youtube.com/embed/FzWG8jiw4XM?autoplay=1'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quia consectetur aut facilis deserunt iusto commodi, laborum
              expedita autem esse?
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
}
