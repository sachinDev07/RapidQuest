import { Outlet } from 'react-router-dom';
import BellIcon from './components/BellIcon';
import { SliderProvider } from './context/SliderContext';

function App() {
  return (
    <div className='p-6'>
      <SliderProvider>
        <BellIcon />
        <Outlet />
      </SliderProvider>
    </div>
  );
}

export default App;
