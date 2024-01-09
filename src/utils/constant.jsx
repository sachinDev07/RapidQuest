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

export const UserData = [
  {
    id: 1,
    year: 20,
    userGain: 25,
    userLost: 70,
  },
  {
    id: 2,
    year: 35,
    userGain: 40,
    userLost: 120,
  },
  {
    id: 3,
    year: 40,
    userGain: 50,
    userLost: 150,
  },
  {
    id: 4,
    year: 45,
    userGain: 66,
    userLost: 200,
  },
  {
    id: 5,
    year: 50,
    userGain: 84,
    userLost: 250,
  },
  {
    id: 5,
    year: 55,
    userGain: 100,
    userLost: 300,
  },
  {
    id: 5,
    year: 60,
    userGain: 110,
    userLost: 310,
  },
];
