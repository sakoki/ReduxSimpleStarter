import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) { // This checks that video variable is defined or not. Sometimes taking data requires time, not giving sufficient time can lead to undefined variables.
    return <div>Loading...</div>;
  }
  
  const videoID = video.id.videoId;
  const url = 'https://www.youtube.com/embed/${videoId}'; // ES6 style: string interpolation. Putting varialbe directly into string. Similar to string formatting in python. 
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail
