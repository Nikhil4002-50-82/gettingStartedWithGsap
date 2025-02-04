import React, { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const box1=useRef();
  const box2=useRef();
  const box3=useRef();
  const page2=useRef();
  const box4=useRef();
  const page3=useRef();
  useGSAP(()=>{
    gsap.from(".heading",{
      opacity:0,
      y:-200,
      duration:2,
      repeat:2,
      yoyo:true,
      delay:0,
      ease:"bounce.out"
    })
    gsap.to(box1.current,{
      x:300,
      y:300,
      repeat:-1,
      rotate:360,
      borderRadius:"60%",
      duration:2,
      delay:1,
      backgroundColor:"blue",
      yoyo:1
    });
    gsap.to(box2.current,{
      x:300,
      repeat:-1,
      rotate:360,
      borderRadius:"60%",
      duration:3,
      delay:1,
      backgroundColor:"red",
      yoyo:1
    })
    gsap.to(box3.current,{
      x:800,
      rotate:360,
      borderRadius:"60%",
      duration:3,
      delay:1,
      scale:2,
      yoyo:1,
      scrollTrigger:{
        trigger:box3.current,
        scroller:"body",
        scrub:2,
        start:"top 60%",
        markers:true,
      }
    })
    gsap.from(box4.current,{
      x:-1000,
      duration:0.1,
      borderRadius:"50%",
      scrollTrigger:{
        trigger:box4.current,
        scroller:"body",
        scrub:2,
        start:"top 70%",
        markers:true,
      }
    })
    gsap.to(page3.current,{
        x:-1500,
        scrollTrigger:{
          trigger:page3.current,
          scroller:"body",
          scrub:2,
          pin:true,
        }
    })
  })
  return (
    <div className='overflow-x-hidden bg-black'>
      <div className='w-[100vw] h-[100vh]'>
        <div className='flex items-center justify-center font-bold'><h1 className='text-white text-[10em] whitespace-nowrap heading'>GSAP-INTRO</h1></div>
        <div ref={box1} className='h-[10em] w-[10em] bg-red-500'>

        </div>
        <div ref={box2} className='h-[10em] w-[10em] bg-blue-600'>

        </div>
        <div ref={box3} className='h-[10em] w-[10em] bg-orange-600'>
          
        </div>
      </div>
      <div ref={page2} className='w-[100vw] h-[100vh]  flex items-end '>
        <div ref={box4} className='h-[15em] w-[45em] '>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/classic-retro-car-illustration-download-in-svg-png-gif-file-formats--vintage-old-vehicle-transport-pack-illustrations-6109447.png?f=webp" alt="" className='h-[100%] w-[100%]' />
        </div>
      </div>
      <div ref={page3} className='w-[4000vw] h-[100vh]  flex items-center '>
          <h1 className='text-[18em] text-white font-bold whitespace-nowrap'>I AM TESTING THIS</h1>
      </div>
      <div className='w-[100vw] h-[10em] bg-black'>
            
      </div>
    </div>
  );
}

export default App;
