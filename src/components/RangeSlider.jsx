import { useState } from 'react';

const RangeSlider = ({ setEmployeContributionfun }) => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    setEmployeContributionfun(rangeValue);
  };

  return (
    <div className='container mt-1'>
      <div className='range'>
        <div className='range__content'>
          <div className='range__slider'>
            <div
              className='range__slider-line'
              style={{ width: `${rangeValue}%` }}
            ></div>
          </div>
          <div
            className='range__thumb'
            style={{ left: `${rangeValue}%` }}
          ></div>
          <input
            type='range'
            className='range__input'
            min='0'
            max='100'
            value={rangeValue}
            step='1'
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
