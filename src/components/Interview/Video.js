import React, { useLayoutEffect, useEffect, useRef, navgate } from "react";
import styled from 'styled-components'
import video_1 from "../../assets/Avatars/avatar_indian_1.mp4"
import video_2 from "../../assets/Avatars/avatar_indian_2.mp4"
import video_3 from "../../assets/Avatars/avatar_indian_3.mp4"
import InterWebcam from "./InterWebcam";

const VideoContainer = styled.div`
position: relative;

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
    position: absolute;
    padding: 54px;
    text-align: center;
    font-size: 160px;
    color: white;
    top: calc( 50% - 119px);
    width: 100%;
    -webkit-text-stroke: 5px black;
    text-shadow:
       5px 5px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`

const Video = () => {
    const vidRef = useRef(null);
    const videos = [video_1, video_2, video_3];
    const [firstTime, setFirstTime] = React.useState(true);
    const [current, setCurrent] = React.useState(0);
    const [title, setTitle] = React.useState("面試開始");
    const [isEnd, setIsEnd] = React.useState(false);

    useLayoutEffect(() => {
        vidRef.current.src = videos[current];
        window.scrollTo(0, 80);
    })

    const playVideo = () => {
        let playPromise
        if(isEnd){
            window.location.replace('/report');
        }
        if(!firstTime) {
            if(current >= 2) {
                setTitle("面試結束");
                setIsEnd(true);
            }else{
                setCurrent(current < 2 ? current + 1 : 2);
                playPromise = vidRef.current.play();
            }
        }else{
            setTitle("");
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
            <CoverContainer>
                {title}
            </CoverContainer>
            <InterWebcam /> 
            <video id="interviewVideo" ref={vidRef} src={videos[current]} type="video/mp4" onClick={playVideo}/>
        </VideoContainer>
    );
}

export default Video;
