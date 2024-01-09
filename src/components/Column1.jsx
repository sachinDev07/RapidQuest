import Logo from '../components/Logo';
import Button from '../components/Button';

const Column1 = () => {
  return (
    <div className='lg:w-1/3 mb-3'>
      <div className='flex items-center gap-5'>
        <Logo />
        <div>
          <h1 className='text-black text-2xl font-heading font-bold'>
            Hi Mike,
          </h1>
          <p className='text-mdSlate text-xs font-simpleText font-bold lowercase'>
            Welcom Back.
          </p>
        </div>
      </div>

      <div className='bg-bgSlate mt-6 p-6 rounded-2xl'>
        <div className='text-secondary text-base font-heading font-bold'>
          Today
        </div>
        <strong className='block mt-2 text-4xl font-extrabold'>$19,892</strong>
        <p className='mt-2 text-mdSlate text-sm font-medium'>Account Balance</p>
        <div className='mt-8 flex justify-between'>
          <div>
            <p className='text-lg text-secondary font-bold'>$4,000</p>
            <p className='text-sm text-mdSlate font-medium'>Year-to-Date</p>
          </div>
          <div>
            <p className='text-lg text-secondary font-bold'>$1,892</p>
            <p className='text-sm text-mdSlate font-medium'>Total Interest</p>
          </div>
        </div>

        <Button />
      </div>

      <div className='bg-bgSlate mt-6 p-6 rounded-2xl'>
        <p className='text-black font-heading font-bold'>Recent Transactions</p>
        <div>
          <span className='block mt-6 text-xs text-mdSlate font-medium'>
            2020-08-07
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
        <div>
          <span className='block mt-6 text-xs text-mdSlate font-medium'>
            2020-07-21
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
        <div>
          <span className='block mt-6 text-xs text-mdSlate font-medium'>
            2020-07-16
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column1;
