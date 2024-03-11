'use client';

import React from 'react';
import Slider from 'react-slick';
import AddCardButton from './addCardButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'; 

interface SliderProps {
  children: React.ReactNode;
}

const CardSlider: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "space-between-slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleAddClick = () => {
    console.log('Añadir nueva tarjeta');
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {React.Children.map(children, child => (
          <div className="card-wrapper">
            {child}
          </div>
        ))}
        <div className="card-wrapper">
          <AddCardButton onClick={handleAddClick} />
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
