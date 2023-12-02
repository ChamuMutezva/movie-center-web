import React from "react";

// decorative video
function Video() {
    return (
        <video
            src="/assets/highway.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0  left-0 object-cover w-full h-full opacity-80"
        ></video>
    );
}

export default Video;
