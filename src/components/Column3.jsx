import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import CircleRating from './CircleRating';
import RangeSlider from './RangeSlider';
import { useSlider } from '../context/SliderContext';

const Column3 = () => {
  const [employeContribution, setEmployeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);
  const { isSliderVisible, toggleSlider } = useSlider();

  return (
    <section
      className={`bg-white w-full h-full fixed bottom-0 ${
        isSliderVisible ? 'left-0' : '-left-[100%]'
      } transition-left duration-150 ease-in`}
    >
      <div className='p-6'>
        <div className='relative bg-red-400 mb-8'>
          <FaXmark
            onClick={toggleSlider}
            className='absolute right-0 text-xl text-mdSlate cursor-pointer'
          />
        </div>
        <p className='text-black font-heading font-bold'>
          How do I compare to my peers?
        </p>
        <p className='text-mdSlate text-[11px] font-medium'>
          These numbers represent current goal achievement.
        </p>
        <div className='space-x-7 text-[14px] mt-2'>
          <strong className='text-slate-700'>Age:</strong>
          <select className='mt-3 font-medium text-mdSlate outline-none '>
            <option value='under30'>Under 30</option>
            <option value='30to50'>30 - 50</option>
            <option value='above50'>Above 50</option>
          </select>
        </div>
        <div className='mt-2 border border-slate-200'></div>
        <div className='space-x-4 text-[14px]'>
          <strong className='text-slate-700'>Salary:</strong>
          <select className='mt-3 font-medium text-mdSlate outline-none'>
            <option value='20to30'>K 20 - K 30</option>
            <option value='30to50'>K 30 - K 50</option>
            <option value='above50'>Above K 50</option>
          </select>
        </div>
        <div className='mt-2 border border-slate-200'></div>
        <div className='space-x-2 text-[14px]'>
          <strong className='text-slate-700'>Gender:</strong>
          <select className='mt-3 font-medium text-mdSlate outline-none'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='mt-3 border border-slate-200'></div>
        <div className='flex items-center justify-between text-black'>
          <div className='text-center'>
            <CircleRating rating={78} />
            <p className='mt-4 text-sm font-bold'>Average</p>
          </div>
          <div className='text-center'>
            <CircleRating rating={95} />
            <p className='mt-4 text-sm font-bold'>Top</p>
          </div>
          <div className='text-center'>
            <CircleRating rating={59} />
            <p className='mt-4 text-sm font-bold'>Me</p>
          </div>
        </div>
      </div>
      <div className='px-6 pt-4 mt-1 bg-[#f8f7f7] rounded-tl-3xl rounded-tr-3xl'>
        <p className='text-black font-heading font-bold'>Retirement Strategy</p>
        <p className='mt-2 text-xs text-black font-bold'>
          Employee Contribution
        </p>
        <div className='flex gap-6 items-center justify-between'>
          <RangeSlider setEmployeContributionfun={setEmployeContribution} />
          <div className='flex gap-1 justify-between items-center text-sm'>
            <p className='p-1 bg-white font-medium'>{employeContribution}</p>
            <p className='p-1 bg-white font-medium'>%</p>
          </div>
        </div>

        <p className='mt-2 text-xs text-black font-bold'>Retirement Age</p>
        <div className='flex gap-6 items-center justify-between'>
          <RangeSlider setEmployeContributionfun={setRetirementAge} />
          <div className='flex gap-2 justify-between items-center text-sm'>
            <p className='py-1 px-3 bg-white font-medium'>{retirementAge}</p>
          </div>
        </div>
        <div className='mt-6 flex justify-between items-center'>
          <p className='text-xs font-bold'>Employer Contribution</p>
          <p className='text-sm font-bold'>8.4%</p>
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <p className='text-xs font-bold'>Interest Rate</p>
          <p className='text-sm font-bold'>5%</p>
        </div>
      </div>

      <button className='absolute bottom-0 left-0 right-0 w-full bg-[#4935FF] font-medium text-center p-2 text-white cursor-pointer'>
        Update
      </button>
    </section>
  );
};

export default Column3;
