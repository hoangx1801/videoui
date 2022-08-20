import React from "react";
import { FaMusic } from 'react-icons/fa';

const VideoInfo = ({ avatar, idName, nickName, music, content }) => {
    return (
        <div className='flex flex-row mt-5 mb-5'>
            <img className='w-[50px] h-[50px] rounded-full' src={avatar} alt="avatar" />
            <div className="ml-2">
                <div>
                    <a href="/" className="text-xl font-bold hover:underline">{idName}</a>
                    <a href="/" className="text-xl">{nickName}</a>
                </div>
                <div>{content}</div>
                <div className="flex flex-row items-center">
                    <FaMusic></FaMusic>
                    <span className="ml-3">{music}</span>
                </div>
            </div>
            <div className="w-[200px] h-9 flex justify-end items-center">
                {" "}
                <button className="p-2 pl-4 pr-4 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
            </div>
        </div>
    )
}

export default VideoInfo;