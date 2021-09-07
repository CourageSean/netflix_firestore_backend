import { useState, useRef } from 'react';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import ListItem from '../listItem/ListItem';
import './list.scss';

export default function List() {
  const listRef = useRef();
  const [slideNumber, setslideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${1.5 * 230 + distance}px)`;
      setslideNumber((slideNumber) => slideNumber - 1);
    }
    if (direction === 'right' && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${
        -1.5 * 230 + distance
      }px)`;
      setslideNumber(slideNumber + 1);
    }
  };
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}
