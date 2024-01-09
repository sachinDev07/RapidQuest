import logo from '../assets/images/profilePic.png';

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt='a person image'
        className='w-[60px]  rounded-full shadow-lg'
      />
    </div>
  );
};

export default Logo;
