import React, { useLayoutEffect, useRef } from "react";
import styled from 'styled-components'
import Webcam from "react-webcam";

const WebcamContainer = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 72px;
    right: 24px;
`

const InterWebcam = () => {

    return (
        <WebcamContainer>
            <Webcam height={300} width={225} />
        </WebcamContainer>
    );
}

export default InterWebcam;