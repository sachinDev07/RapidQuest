import Column1 from '../components/Column1';
import Column2 from '../components/Column2';
import Column3 from '../components/Column3';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const HomePage = () => {
  return (
    <div className='lg:flex'>
      <Navbar />
      <SideBar />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
};

export default HomePage;
