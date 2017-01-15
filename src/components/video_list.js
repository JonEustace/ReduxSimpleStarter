// This component doesn't require state it doesn't record users reactions nor does it rerender itself.
// Thus we can make it a functional component.

import React from 'react';
// we get props from the parent component (in this case it's a object of videos)
const VideoList = (props) => {
    return(
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    )
};

export default VideoList;