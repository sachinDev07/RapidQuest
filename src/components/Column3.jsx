import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import CircleRating from './CircleRating';
import RangeSlider from './RangeSlider';
import { useSlider } from '../context/SliderContext';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';

const Column3 = () => {
  const [employeContribution, setEmployeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);
  const { isSliderVisible, toggleSlider } = useSlider();

  return (
    <section
      className={`bg-white w-full h-full fixed bottom-0 ${
        isSliderVisible ? 'right-0' : '-right-[100%]'
      } transition-left duration-150 ease-in lg:right-20 lg:w-[350px]`}
    >
      <div className='p-6'>
        <div className='lg:hidden relative bg-red-400 mb-8'>
          <FaXmark
            onClick={toggleSlider}
            className='absolute right-0 text-xl text-mdSlate cursor-pointer'
          />
        </div>
        <div className='lg:hidden'>
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
      </div>
      <div className='px-6 pt-4 mt-1 bg-bgSlate rounded-tl-3xl rounded-tr-3xl lg:rounded-3xl'>
        <p className='text-black font-heading font-bold mt-4'>
          Retirement Strategy
        </p>
        <p className='mt-2 lg:mt-4 text-xs text-black font-bold'>
          Employee Contribution
        </p>
        <div className='flex gap-6 items-center justify-between text-center lg:mt-2'>
          <RangeSlider setEmployeContributionfun={setEmployeContribution} />
          <div className='flex gap-1 justify-between items-center text-sm'>
            <p className='p-1 bg-white font-medium'>{employeContribution}</p>
            <p className='p-1 bg-white font-medium'>%</p>
          </div>
        </div>

        <p className='mt-2 lg:mt-6 text-xs text-black font-bold'>
          Retirement Age
        </p>
        <div className='flex gap-6 items-center justify-between'>
          <RangeSlider setEmployeContributionfun={setRetirementAge} />
          <div className='flex gap-2 justify-between items-center text-sm'>
            <p className='py-1 px-3 bg-white font-medium'>{retirementAge}</p>
          </div>
        </div>
        <div className='mt-4 lg:mt-6 flex justify-between items-center'>
          <p className='text-xs font-bold'>Employer Contribution</p>
          <p className='text-sm font-bold'>8.4%</p>
        </div>
        <div className='mt-3 lg:mt-5 flex justify-between items-center'>
          <p className='text-xs font-bold'>Interest Rate</p>
          <p className='text-sm font-bold'>5%</p>
        </div>
        <div className='hidden lg:block mt-6'>
          <button className='w-full bg-[#4935FF] font-medium text-center p-2 text-white cursor-pointer rounded-xl hover:bg-blue-900 transition duration-150 ease-in-out'>
            Update
          </button>
          <p className='text-center mt-6 text-blue-900 font-bold pb-8'>
            <Link>
              View Help Docs <RxCaretRight className='inline' />
            </Link>
          </p>
        </div>
      </div>

      <div className='border-l-2 border-blue-800 mt-8 px-6 py-3'>
        <p className='font-medium'>Are you considering a</p>
        <strong className='font-extrabold mt-1 block'>Housing Advance?</strong>
        <p className='text-sm mt-2 text-mdSlate font-medium'>
          Limited time reduced interest.
        </p>
        <Link className='mt-2 block text-blue-800 font-bold'>
          Learn More <RxCaretRight className='inline' />
        </Link>
      </div>

      <button className='absolute bottom-0 w-full bg-[#4935FF] font-medium text-center p-2 text-white cursor-pointer lg:hidden'>
        Update
      </button>
    </section>
  );
};

export default Column3;
