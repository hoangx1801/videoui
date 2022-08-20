import React from 'react'
import VideoContent from './VideoContent';
import VideoInfo from './VideoInfo';

const Video = ({ data }) => {
    return (
        <div key={data.id} className='snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-10'>
            <VideoInfo {...data}/>
            <VideoContent {...data}/>
        </div>
    )
}

export default Video;