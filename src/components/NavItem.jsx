import { Link } from 'react-router-dom';

const NavItem = ({ icon, isActive, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className={`p-2 text-xl text-mdSlate hover:text-white hover:bg-blue-800 rounded-lg ${
        isActive ? 'bg-blue-800 text-white' : 'bg-white'
      } transition duration-200 ease-linear`}
    >
      {icon}
    </Link>
  );
};

export default NavItem;
