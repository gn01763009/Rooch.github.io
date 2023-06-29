import React, { Component } from "react";
import { Player } from "video-react";
import video_1 from "../../assets/Avatars/avatar_indian.mp4"

const Video = () => {
    <Player 
        fluid={false}
        width={600}
        height={400}
        muted={true}
        autoPlay={true}
    >
        <source src={video_1} />
    </Player>
}

export default Video;