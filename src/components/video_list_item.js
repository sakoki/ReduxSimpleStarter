import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // Same as: 
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect
  //ES6 syntax:
  // The first object in this arguments array has a property video. Grab that
  // video and declare a new variable called video.
  const imageUrl = video.snippet.thumbnails.default.url;
  // Whenever user clicks on li, call onVideoSelect
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
