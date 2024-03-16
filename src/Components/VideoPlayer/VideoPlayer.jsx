import React,{useRef} from 'react'
import './VideoPlayer.css'
import video  from '../../assets/Video.mp4'
const VideoPlayer = ({playState, SetPlayState}) => {


  const player = useRef(null);
  const closerPlayer =(e)=>
  {
    if(e.target === player.current)
    {
      SetPlayState(false);
    }
  }
   
  return (
    <div className={`video-player ${playState ?'' :'hide'}`} ref={player} onClick={closerPlayer}> 
     <video src={video} autoPlay controls></video>
    </div>
  )
}

export default VideoPlayer