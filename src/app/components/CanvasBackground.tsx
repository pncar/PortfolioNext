"use client";
import { useState, useEffect, useRef } from 'react';

const CanvasBackground = () => {
    const kanvas: any = useRef(null);
    const [sneed,setSneed] = useState<number[]>([0,0]);

    useEffect(()=>{
        document.body.addEventListener("mousemove",(e)=>{handleSneed(e);});
    },[]);

    const handleSneed = (e: MouseEvent) => {
        setSneed([e.clientX +1,e.clientY +1]);
    }

    const canvasEffect = () => {
        const c :any = kanvas.current;
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        const ctx : any = c.getContext("2d");
    
        const smallG: number = 1;
        const largeG: number = 760;

        const color1 = "#334155";
        const color2 = "#4f46e5";
    
        let grd: any = ctx.createRadialGradient(sneed[0], sneed[1], 1, sneed[0], sneed[1], largeG);
        grd.addColorStop(0, color1);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(sneed[0], sneed[1], largeG, 0, 2 * Math.PI);
        ctx.fill();
    
        grd = ctx.createRadialGradient(sneed[0], sneed[1], 1, sneed[0], sneed[1], smallG);
        grd.addColorStop(0, color2);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(sneed[0], sneed[1], smallG, 0, 2 * Math.PI);
        ctx.fill();


    }

    useEffect(()=>{
        if(kanvas && kanvas.current){
        canvasEffect();
        }
      },[sneed]);

    return(
        <>
            <canvas id="canvas" ref={kanvas} width="100%" height="100%" className={`hidden lg:block`}>
            </canvas>
        </>
    )
}
export default CanvasBackground;