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
  if (!context) {
    throw new Error('useSlider must be used within a SliderProvider');
  }
  return context;
};
