import React from 'react';
import VideoListItem from './video_list_item';

// Functional Component
// Accepts props from parent component
const VideoList = (props) => { // Use map() method to pass function into element in videos, create variable videoItems that contain array of VideoListItem
  const videoItems = props.videos.map((video) => {
    return ( // Pass onVideoSelect from App into VideoListItem
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} /> //unique identifer for each element in the list. 
    );
  });
  
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
