import { CiHome } from 'react-icons/ci';
import { FaRegNewspaper } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { IoPerson } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

export const navItems = [
  { to: '/home', icon: <CiHome />, label: 'Home' },
  { to: '/news', icon: <FaRegNewspaper />, label: 'News' },
  { to: '/list', icon: <CiViewList />, label: 'List' },
  { to: '/profile', icon: <IoPerson />, label: 'Profile' },
  { to: '/search', icon: <FaSearch />, label: 'Search' },
];
