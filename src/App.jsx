import { Outlet } from 'react-router-dom';
import BellIcon from './components/BellIcon';

function App() {
  return (
    <div className='p-6'>
      <BellIcon />
      <Outlet />
    </div>
  );
}

export default App;
