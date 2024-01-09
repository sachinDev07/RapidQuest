import Column1 from '../components/Column1';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className='lg:flex'>
      <Navbar />
      <Column1 />
    </div>
  );
};

export default HomePage;
