import { useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { FaRegNewspaper } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { IoPerson } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import butterflyIcon from '../assets/images/butterfly.png';
import { TbLogout } from 'react-icons/tb';
import { CiBellOn } from 'react-icons/ci';


const SideBar = () => {
  const [selectedIcon, setSelectedIcon] = useState('CiHome');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName === selectedIcon ? null : iconName);
  };
  return (
    <section className='hidden lg:block py-2'>
      <div className='flex flex-col justify-between w-14 items-center h-full text-mdSlate '>
        <div className='flex flex-col justify-between gap-14'>
          <div className='space-y-5'>
            <img src={butterflyIcon} alt='a butterfly icon' className='w-6' />
            <FaSearch className='text-3xl rounded-lg  p-2 hover:text-white hover:bg-blue-700 transition duration-150 ease-linear cursor-pointer' />
          </div>
          <div className='space-y-4'>
            <CiHome
              className={`text-4xl rounded-lg p-2 ${
                selectedIcon === 'CiHome'
                  ? 'text-white bg-blue-700'
                  : 'hover:text-white hover:bg-blue-700'
              } transition duration-150 ease-linear cursor-pointer`}
              onClick={() => handleIconClick('CiHome')}
            />
            <FaRegNewspaper
              className={`text-4xl rounded-lg p-2 ${
                selectedIcon === 'FaRegNewspaper'
                  ? 'text-white bg-blue-700'
                  : 'hover:text-white hover:bg-blue-700'
              } transition duration-150 ease-linear cursor-pointer`}
              onClick={() => handleIconClick('FaRegNewspaper')}
            />
            <CiViewList
              className={`text-4xl rounded-lg p-2 ${
                selectedIcon === 'CiViewList'
                  ? 'text-white bg-blue-700'
                  : 'hover:text-white hover:bg-blue-700'
              } transition duration-150 ease-linear cursor-pointer`}
              onClick={() => handleIconClick('CiViewList')}
            />
            <IoPerson
              className={`text-4xl rounded-lg p-2 ${
                selectedIcon === 'IoPerson'
                  ? 'text-white bg-blue-700'
                  : 'hover:text-white hover:bg-blue-700'
              } transition duration-150 ease-linear cursor-pointer`}
              onClick={() => handleIconClick('IoPerson')}
            />
          </div>
        </div>
        <div className=' space-y-3 text-center'>
          <CiBellOn className='text-4xl rounded-lg  p-2 hover:text-white hover:bg-blue-700 transition duration-150 ease-linear cursor-pointer' />
          <TbLogout className='text-4xl rounded-lg  p-2 hover:text-white hover:bg-blue-700 transition duration-150 ease-linear cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
