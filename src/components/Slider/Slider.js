import React, { useState } from 'react'
// import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider';
import slideimage1 from '../../assets/Imgs/img1.jpg';
import slideimage2 from '../../assets/Imgs/img2.jpg';
import slideimage3 from '../../assets/Imgs/img3.jpg';
import slideimage4 from '../../assets/Imgs/img4.jpg';
import slideimage5 from '../../assets/Imgs/img5.jpg';

const dataimage = [
    {
        id: 1,
        image: slideimage1,
        title: 'Front working space',
    },
    {
        id: 2,
        image: slideimage2,
        title: 'Meeting corner',
    },
    {
        id: 3,
        image: slideimage3,
        title: 'Guest meeting room',
    },
    {
        id: 4,
        image: slideimage4,
        title: 'Guest rest room',
    },
    {
        id: 5,
        image: slideimage5,
        title: 'Kitchen room',
    },

];


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        if (slideIndex !== dataimage.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex == dataimage.length - 1) {
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex == 0) {
            setSlideIndex(dataimage.length - 1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataimage.map((imagedata, index) => {
                return (
                    <div
                        key={imagedata.id}
                        className={slideIndex === index ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={imagedata.image}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index)}
                        className={slideIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
