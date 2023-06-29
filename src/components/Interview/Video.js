import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from 'styled-components'
import video_1 from "../../assets/Avatars/avatar_indian_1.mp4"
import video_2 from "../../assets/Avatars/avatar_indian_2.mp4"
import video_3 from "../../assets/Avatars/avatar_indian_3.mp4"
import InterWebcam from "./InterWebcam";
import {useNavigate} from "react-router-dom";

const VideoContainer = styled.div`
position: relative;
background-color: #0f3367;
width: 100%;

#interviewVideo{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverContainer = styled.div`
    background-color: rgba(0,0,0,0.6);
    pointer-events: none;
    position: fixed;
    padding: 54px;
    z-index: 999;
    top: 0;
    font-size: 160px;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    item-align: center;
    -webkit-text-stroke: 5px black;
    text-shadow:
       5px 5px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
    div{
        margin: auto;
        font-family: 'Roboto', sans-serif;
    }
`

const Video = () => {
    const vidRef = useRef(null);
    const coverRef = useRef(null);
    const videos = [video_1, video_2, video_3];
    const [firstTime, setFirstTime] = React.useState(true);
    const [current, setCurrent] = React.useState(0);
    const [title, setTitle] = React.useState("Start practice");
    const [isEnd, setIsEnd] = React.useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 80);
        vidRef.current.src = videos[current];
    })

    const playVideo = () => {
        let playPromise
        if (isEnd) {
            navigate('/report');
            return;
        }
        if (!firstTime) {
            if (current >= 2) {
                vidRef.current.pause();
                coverRef.current.classList.remove("animate__animated");
                coverRef.current.classList.remove("animate__fadeOut");
                setTimeout(() => {
                    setTitle("Finish");
                    coverRef.current.classList.add("animate__animated");
                    coverRef.current.classList.add("animate__fadeIn");
                }, 100);
                setIsEnd(true);
            } else {
                setCurrent(current < 2 ? current + 1 : 2);
                playPromise = vidRef.current.play();
            }
        } else {
            setTitle("");
            coverRef.current.classList.add("animate__animated");
            coverRef.current.classList.add("animate__fadeOut");
            // coverRef.current.style.display = "none";
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
            <CoverContainer ref={coverRef}>
                <div>{title}</div>
            </CoverContainer>
            <InterWebcam />
            <video id="interviewVideo" ref={vidRef} src={videos[current]} type="video/mp4" onClick={playVideo} />
        </VideoContainer>
    );
}

export default Video;
