import { CiBellOn } from 'react-icons/ci';

const BellIcon = () => {
  return (
    <div className='px-6 mb-5 sticky bg-red-800 right-0'>
      <CiBellOn className='absolute right-2 text-xl text-mdSlate font-medium cursor-pointer' />
      <div className='absolute top-0 right-1  w-2 h-2 rounded-full bg-blue-800'></div>
    </div>
  );
};

export default BellIcon;
