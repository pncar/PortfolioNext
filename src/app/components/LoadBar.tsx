"use client";
import { useState, useEffect } from "react";
const LoadBar = () => {
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 10); // Adjust speed here (50ms per step)
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);

    return(
        <div className="w-full h-1">
            <div style={{ width: `${progress}%` }} className="h-full bg-white shadow-glow">
            </div>
        </div>
    )
}

export default LoadBar;