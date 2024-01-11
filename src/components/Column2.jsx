import BarChart from './BarChart';
import { UserData, UserDataOnLargeDevices } from '../utils/constant';
import { useState } from 'react';
import { useSlider } from '../context/SliderContext';
import CircleRating from './CircleRating';

const Column2 = () => {
  const isLargeDevice = window.innerWidth > 1024;
  const chartData = isLargeDevice ? UserDataOnLargeDevices : UserData;

  const { toggleSlider } = useSlider();
  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: '',
        data: chartData.map((data) => data.userGain),
        backgroundColor: ['#0800A3'],
        barThickness: 12,
      },
      {
        label: '',
        data: chartData.map((data) => data.userGain),
        backgroundColor: ['#4935FF'],
        barThickness: 12,
      },
      {
        label: '',
        data: chartData.map((data) => data.userGain),
        backgroundColor: ['#85AFFF'],
        barThickness: 12,
      },
    ],
  });

  return (
    <section className='mt-6 mb-6 lg:mb-0 lg:w-[650px] py-12 lg:px-16 lg:py-0 lg:pt-12 lg:mt-0'>
      <div className='mb-6 lg:mb-2'>
        <p className='text-blue-800 text-sm font-heading font-bold'>
          Retirement Income
        </p>
        <p className='text-xl font-bold'>Starting Year 2056</p>
      </div>

      <div>
        <div className='lg:flex items-center justify-between'>
          <div>
            <strong className='block mt-2 text-3xl lg:text-3xl font-extrabold'>
              $300,000
            </strong>
            <span className='block mt-1 text-mdSlate text-sm font-medium'>
              My Goal
            </span>

            <div className='mt-4 bg-blue-700 h-[1px] lg:h-[2px]'></div>
          </div>

          <div className='mt-4 flex justify-between lg:gap-20'>
            <div>
              <span className='text-xl lg:text-3xl font-extrabold'>59%</span>
              <span className='block mt-1 text-sm text-mdSlate font-medium'>
                Goal Achieved
              </span>
              <div className='mt-4 bg-blue-700 h-[1px] lg:h-[2px]'></div>
            </div>
            <div>
              <span className='text-xl lg:text-3xl font-extrabold'>K 300</span>
              <span className='block mt-1 text-sm text-mdSlate font-medium'>
                Est. Monthly Income
              </span>
              <div className='mt-4 bg-blue-700 h-[1px] lg:h-[2px]'></div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <p className='text-black font-heading font-bold lg:text-lg'>
            Contrubutions Overtime
          </p>
          <div className='mt-6 flex items-center justify-between'>
            <div className='lg:flex items-center lg:space-x-2'>
              <div className='h-2 w-3 bg-blue-800 rounded-md'></div>
              <p className='block mt-2 lg:mt-0 text-xs text-mdSlate font-medium lg:hidden'>
                Employer
              </p>
              <span className='mt-2 lg:mt-0 text-sm text-mdSlate font-medium hidden lg:block'>
                Employer:
              </span>
              <strong className='block mt-1 lg:mt-0 text-lg font-bold lg:hidden'>
                $73,500
              </strong>
              <strong className='mt-1 lg:mt-0 text-sm font-bold hidden lg:block'>
                K 73,500
              </strong>
            </div>
            <div className='lg:flex items-center lg:space-x-2'>
              <div className='h-2 w-3 bg-blue-600 rounded-md'></div>
              <p className='block mt-2 lg:mt-0 text-xs text-mdSlate font-medium lg:hidden'>
                Employee
              </p>
              <p className='mt-2 lg:mt-0 text-sm text-mdSlate font-medium hidden lg:block'>
                Employee:
              </p>
              <strong className='block mt-1 lg:mt-0 text-lg font-bold lg:hidden'>
                $52,500
              </strong>
              <strong className='mt-1 lg:mt-0 text-sm font-bold hidden lg:block'>
                K 52,500
              </strong>
            </div>
            <div className='lg:flex items-center lg:space-x-2'>
              <div className='h-2 w-3 bg-blue-400 rounded-md'></div>
              <p className='block mt-2 lg:mt-0 text-xs text-mdSlate font-medium lg:hidden'>
                Total Interest
              </p>
              <p className='mt-2 lg:mt-0 text-sm text-mdSlate font-medium hidden lg:block'>
                Total Interest
              </p>
              <strong className='block mt-1 lg:mt-0 text-lg font-bold lg:hidden'>
                $244,313
              </strong>
              <strong className='mt-1 lg:mt-0 text-sm font-bold hidden lg:block'>
                K 244,313
              </strong>
            </div>
          </div>
        </div>

        <div onClick={toggleSlider}>
          <BarChart charData={userData} />
        </div>

        <div className='hidden lg:block lg:mt-4'>
          <p className='text-black font-heading font-bold'>
            How do I compare to my peers?
          </p>
          <p className='text-mdSlate text-[11px] font-medium'>
            These numbers represent current goal achievement.
          </p>
          <div className='flex justify-between'>
            <div>
              <div className='space-x-7 text-[14px] mt-2 lg:text-[12px]'>
                <strong className='text-slate-700'>Age:</strong>
                <select className='mt-3 font-medium text-mdSlate outline-none '>
                  <option value='under30'>Under 30</option>
                  <option value='30to50'>30 - 50</option>
                  <option value='above50'>Above 50</option>
                </select>
              </div>
              <div className='mt-2 border border-slate-200'></div>
              <div className='space-x-4 text-[14px] lg:text-[12px]'>
                <strong className='text-slate-700'>Salary:</strong>
                <select className='mt-3 font-medium text-mdSlate outline-none'>
                  <option value='20to30'>K 20 - K 30</option>
                  <option value='30to50'>K 30 - K 50</option>
                  <option value='above50'>Above K 50</option>
                </select>
              </div>
              <div className='mt-2 border border-slate-200'></div>
              <div className='space-x-2 text-[14px] lg:text-[12px]'>
                <strong className='text-slate-700'>Gender:</strong>
                <select className='mt-3 font-medium text-mdSlate outline-none'>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='mt-3 border border-slate-200'></div>
            </div>
            <div>
              <div className='flex items-center justify-between gap-6 text-black'>
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
        </div>
      </div>
    </section>
  );
};

export default Column2;
