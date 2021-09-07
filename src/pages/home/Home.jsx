import Featured from '../../featured/Featured';
import List from '../../list/List';
import Navbar from '../../navbar/Navbar';
import './home.scss';

export default function Home() {
  return (
    <div className='home'>
      <Navbar />

      <Featured type='movie' />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
