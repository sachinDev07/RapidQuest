import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleRating =({ rating }) => {
  return (
    <div className='circleRating relative'>
      <CircularProgressbar
        value={rating}
        maxValue={100}
        text=""  
        styles={buildStyles({
          pathColor: rating < 50 ? 'red' : '#23D5AA',
          textColor: 'black',
        })}
      />
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-extrabold'>
        {rating}<sup>%</sup>
      </p>
      
    </div>
  );
};

export default CircleRating;
