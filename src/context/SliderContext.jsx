import React, { createContext, useContext, useState } from 'react';

const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const toggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <SliderContext.Provider value={{ isSliderVisible, toggleSlider }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  return context;
};
