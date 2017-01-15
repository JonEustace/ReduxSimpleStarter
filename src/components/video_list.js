// This component doesn't require state it doesn't record users reactions nor does it rerender itself.
// Thus we can make it a functional component.

import React from 'react';
import VideoListItem from './video_list_item';
// we get props from the parent component (in this case it's a object of videos)
const VideoList = (props) => {

    const videoItems = props.videos.map(video => <VideoListItem key={video.etag} video={video} />);

    //React knows that videoItems is an array, so it loops through it in the list.
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;