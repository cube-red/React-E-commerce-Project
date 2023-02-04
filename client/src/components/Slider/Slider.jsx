import React from 'react'
import { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () =>{
        if(currentSlide-1<0)setCurrentSlide(2);
        else setCurrentSlide(currentSlide-1);
        
    }

    const nextSlide = () => {
        if(currentSlide+1>2)setCurrentSlide(0);
        else setCurrentSlide(currentSlide+1);
    }

    const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Slider
