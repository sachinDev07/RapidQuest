import Logo from '../components/Logo';
import Button from '../components/Button';

const Column1 = () => {
  return (
    <section className='mb-3 lg:h-screen lg:px-20 lg:pt-8 lg:bg-bgSlate'>
      <div className='flex items-center gap-5'>
        <Logo />
        <div>
          <h1 className='text-black text-2xl font-heading font-bold'>
            Hi Mike,
          </h1>
          <p className='text-mdSlate text-xs font-simpleText font-bold lowercase'>
            Welcome Back.
          </p>
        </div>
      </div>

      <div className='bg-bgSlate mt-6 p-6 lg:p-0 rounded-2xl lg:mt-8'>
        <div className='text-secondary text-base font-heading font-bold'>
          Today
        </div>
        <strong className='block mt-2 text-4xl lg:text-3xl font-extrabold'>
          $19,892
        </strong>
        <p className='mt-2 text-mdSlate text-sm lg:text-xs font-medium'>
          Account Balance
        </p>
        <div className='mt-8 lg:mt-4 flex lg:flex-col lg:gap-4 justify-between'>
          <div>
            <p className='text-lg text-secondary font-bold'>$4,000</p>
            <p className='text-sm lg:text-xs text-mdSlate font-medium inline'>
              Year-to-Date{' '}
              <span className='hidden lg:inline'>Contribution</span>
            </p>
          </div>
          <div>
            <p className='text-lg text-secondary font-bold'>$1,892</p>
            <p className='text-sm lg:text-xs text-mdSlate font-medium'>
              Total Interest
            </p>
          </div>
        </div>

        <Button />
      </div>

      <div className='bg-bgSlate mt-6 lg:mt-11 p-6 lg:p-0 rounded-2xl'>
        <p className='text-black font-heading font-bold'>Recent Transactions</p>
        <div>
          <span className='block mt-6 lg:mt-4 text-xs text-mdSlate font-medium'>
            2020-08-07
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
        <div className='mt-4 lg:mt-2 bg-slate-300 h-[1px]'></div>
        <div>
          <span className='block mt-6 lg:mt-4 text-xs text-mdSlate font-medium'>
            2020-07-21
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
        <div className='mt-4 lg:mt-2 bg-slate-300 h-[1px]'></div>
        <div>
          <span className='block mt-6 lg:mt-4 text-xs text-mdSlate font-medium'>
            2020-07-16
          </span>
          <p className='mt-1 text-black text-[13px] font-bold'>
            Withdrawal Transfer to Bank-XX11
          </p>
        </div>
        <div className='mt-4 lg:mt-2 bg-slate-300 h-[1px]'></div>
      </div>
    </section>
  );
};

export default Column1;
