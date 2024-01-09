import React from 'react';

const Column2 = () => {
  return (
    <section className='lg:w-1/3 mt-6 mb-6 py-12'>
      <div className='mb-6'>
        <p className='text-blue-800 text-sm font-heading font-bold'>
          Retirement Income
        </p>
        <p className='text-xl font-bold'>Starting Year 2056</p>
      </div>

      <div>
        <strong className='block mt-2 text-3xl font-extrabold'>$19,892</strong>
        <span className='block mt-1 text-mdSlate text-sm font-medium'>
          My Goal
        </span>

        <div className='mt-4 bg-blue-700 h-[1px]'></div>

        <div className='mt-4 flex justify-between'>
          <div>
            <span className='text-xl font-extrabold'>59%</span>
            <span className='block mt-1 text-sm text-mdSlate font-medium'>
              Goal Achieved
            </span>
            <div className='mt-4 bg-blue-700 h-[1px]'></div>
          </div>
          <div>
            <span className='text-xl font-extrabold'>K 300</span>
            <span className='block mt-1 text-sm text-mdSlate font-medium'>
              Est. Monthly Income
            </span>
            <div className='mt-4 bg-blue-700 h-[1px]'></div>
          </div>
        </div>

        <div className='mt-10'>
          <p className='text-black font-heading font-bold'>
            Contrubutions Overtime
          </p>
          <div className='mt-6 flex items-center justify-between'>
            <div>
              <div className='h-2 w-4 bg-blue-800 rounded-md'></div>
              <p className='block mt-2 text-xs text-mdSlate font-medium'>
                Employer
              </p>
              <strong className='block mt-1 text-lg font-bold'>$73,500</strong>
            </div>
            <div>
              <div className='h-2 w-4 bg-blue-600 rounded-md'></div>
              <p className='block mt-2 text-xs text-mdSlate font-medium'>
                Employee
              </p>
              <strong className='block mt-1 text-lg font-bold'>$52,500</strong>
            </div>
            <div>
              <div className='h-2 w-4 bg-blue-400 rounded-md'></div>
              <p className='block mt-2 text-xs text-mdSlate font-medium'>
                Total Interest
              </p>
              <strong className='block mt-1 text-lg font-bold'>$244,313</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Column2;
