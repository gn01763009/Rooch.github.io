import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Lottie from "lottie-react";
import AILoading from "./ai-loading.json";
import { useNavigate } from 'react-router-dom';


const loadingData = ["30+ million company data...", "9+ million job seeker data...", "10+ million simulated data..."]

const Loading = () => {
  const [state, setState] = useState(0);
  const wording = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const timer =  setInterval(() => {
      if (wording.current) {
        wording.current.classList.add('animate__fadeOutUp');
        setTimeout(() => {
          if(wording.current) {
            wording.current.classList.remove('animate__fadeOutUp');
            wording.current.classList.add('animate__fadeInUp');
          }
          setState((prev) => prev < loadingData.length - 1 ? prev + 1 : 0);
        }, 500);
      }
    }, 2000)
    setTimeout(() => {
      navigate('/interview');
    }, 8000);
    return () => clearInterval(timer);
  },[])

    return (
        <div className='flex flex-col pt-20 pb-10'>
          <h1 className='text-2xl font-bold text-center'>Rooch AI Loading….</h1>
          <Lottie className='w-2/3 mx-auto -my-10 md:-my-40' animationData={AILoading} />
          <div ref={wording} className='text-center p-2 text-lg font-bold leading-7_5 animate__animated animate__faster'>{loadingData[state]}</div>
        </div>
    );
  
};

export default Loading;