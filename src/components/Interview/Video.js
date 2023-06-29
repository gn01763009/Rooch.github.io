import React, { useLayoutEffect, useEffect, useRef } from "react";
import styled from 'styled-components'
import video_1 from "../../assets/Avatars/avatar_indian_1.mp4"
import video_2 from "../../assets/Avatars/avatar_indian_2.mp4"
import video_3 from "../../assets/Avatars/avatar_indian_3.mp4"

const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const Video = () => {
    const vidRef = useRef(null);
    const videos = [video_1, video_2, video_3];
    const [firstTime, setFirstTime] = React.useState(true);
    const [current, setCurrent] = React.useState(0);

    useLayoutEffect(() => {
        vidRef.current.src = videos[current];
        window.scrollTo(0, 100);
    })

    const playVideo = () => {
        let playPromise
        if(!firstTime) {
            setCurrent(current < 2 ? current + 1 : 0);
            console.log("current:"+current);
            playPromise = vidRef.current.play();
        }
        vidRef.current.src = videos[current];
        vidRef.current.load();
        setFirstTime(false);
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("playing");
                vidRef.current.play();
            })
            .catch(error => {

            });
        }
    }

    return (
        <VideoContainer>
            <video id="interviewVideo" ref={vidRef} src={videos[current]} type="video/mp4" onClick={playVideo} autoPlay/>
        </VideoContainer>
    );
}

export default Video;
