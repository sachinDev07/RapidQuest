import { FaCaretDown } from "react-icons/fa";

const Button = () => {
  return (
    <button className='w-full lg:w-auto mt-7 text-center bg-primary rounded-md p-2 lg:px-6 hover:bg-blue-900 transition duration-150 ease-in-out cursor-pointer  text-white text-bold font-medium'>
      I want to <FaCaretDown className="lg:inline hidden"/> <span className='lg:hidden'>...</span>
    </button>
  );
};

export default Button;
