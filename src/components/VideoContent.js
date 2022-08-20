import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import React, { useRef, useState, useEffect } from 'react';
import useElementOnScreen from './useElementOnScreen';

const VideoContent = ({ video, like, comment, share }) => {
    const videoRef = useRef();
    const [ playing, setPlaying ] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }

    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
          if (!playing) {        
            videoRef.current.play();
            setPlaying(true)
          }
        }
        else {
          if (playing) {        
            videoRef.current.pause();
            setPlaying(false)
          }
        }
      }, [isVisibile, playing]);

    const handleClick = () => {
      if (playing) {
        videoRef.current.pause();
        setPlaying(!playing);
      } else {
        videoRef.current.play();
        setPlaying(!playing);
      }
    };

    return (
        <div className='flex flex-row'>
            <video  
                ref={videoRef}
                onClick={handleClick} 
                className="w-[80%] m-w-[600px] ml-[50px] rounded-md" 
                src={video} 
                loop
            ></video>
            <div className='flex flex-col justify-end ml-7'>
                <div className='text-center ml-4'>
                    <div className='rounded-full bg-slate-200 w-[40px] h-[40px] items-center justify-center flex'>
                        <FaHeart className='text-xl text-center' />
                    </div>
                    <span>{like}</span>
                </div>
                <div className='text-center ml-4'>
                    <div className='rounded-full bg-slate-200 w-[40px] h-[40px] items-center justify-center flex'>
                        <FaComment className='text-xl text-center' />
                    </div>
                    <span>{comment}</span>
                </div>
                <div className='text-center ml-4'>
                    <div className='rounded-full bg-slate-200 w-[40px] h-[40px] items-center justify-center flex'>
                        <FaShare className='text-xl text-center' />
                    </div>
                    <span>{share}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoContent;