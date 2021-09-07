import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      {/* <video src='' className='video' autoPlay progress controls src=''></video> */}
      <iframe
        src='https://voe.sx/e/feuk40lvxmp7'
        // width='800px'
        // height='600px'
        scrolling='no'
        frameborder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowfullscreen='true'
        autoPlay='true'
      ></iframe>
    </div>
  );
}
