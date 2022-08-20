import './App.css';
import Video from './components/Video';
import React, { useEffect, useState } from 'react';
import db from './firebase';

function App() {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    document.getElementById('focus').focus();

    db.collection("videos").get().then((querySnapshot) => {
      setVideos(querySnapshot.docs.map(doc => doc.data()))
    })
  })

  return (
    <div id='focus' className='flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden'>
      {videos.map((video) => (
        <Video data={video} />
      ))}
    </div>
  );
}

export default App;
