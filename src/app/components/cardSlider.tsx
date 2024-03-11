import React, { useState } from 'react';
import AddCardButton from './addCardButton';
interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider: React.FC<CardSliderProps> = ({ children }) => {
  const [offset, setOffset] = useState(0);

  const sliderContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: 'auto',
  };

  const sliderWrapperStyle: React.CSSProperties = {
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${offset * 100}%)`,
  };

  const cardStyle: React.CSSProperties = {
    flex: '0 0 auto',
    width: 'auto', 
    padding: '10px', 
  };

  const totalChildren = React.Children.count(children);

  const goNext = () => {
    setOffset((prevOffset) => (prevOffset + 1) % totalChildren);
  };


  const goPrevious = () => {
    setOffset((prevOffset) => (prevOffset - 1 + totalChildren) % totalChildren);
  };
  const accion = () => {
    console.log("Accion");
  }
  return (
    <div>
      <button onClick={goPrevious}>Anterior</button>
      <div style={sliderContainerStyle}>
        <div style={sliderWrapperStyle}>
          {React.Children.map(children, (child, index) => (
            <div key={index} style={cardStyle}>
              {child}
            </div>
            
          ))}
           <AddCardButton onClick={accion}/>
        </div>
      </div>
      <button onClick={goNext}>Siguiente</button>
    </div>
  );
};

export default CardSlider;
