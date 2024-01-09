import NavItem from './NavItem';
import { navItems } from '../utils/constant';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    setActiveNavItem(0);
  }, []);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  
  return (
    <div className='fixed bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between bg-white'>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          {...item}
          isActive={activeNavItem === index}
          onClick={() => handleNavItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Navbar;
