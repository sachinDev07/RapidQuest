import { CiBellOn } from 'react-icons/ci';

const BellIcon = () => {
  return (
    <div className='lg:hidden px-6 mb-5 sticky right-0'>
      <CiBellOn className='absolute z-50 right-2 text-xl text-mdSlate font-medium cursor-pointer' />
      <div className='absolute top-0 right-1  w-2 h-2 rounded-full bg-blue-800'></div>
    </div>
  );
};

export default BellIcon;
