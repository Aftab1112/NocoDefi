import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import ERC20Token from './components/ERC20Token';

const App = () => {
  const { address } = useAccount();

  return (
    <div className='w-full h-screen'>

      <div className='h-[65px] bg-slate-700 flex items-center  '>
        <div className='w-full px-5 flex justify-between items-center '>
          <h1>Testing</h1>
          <ConnectButton />
        </div>
      </div>

      <div className='w-full h-full  flex'>
          <div className='w-[20%]  px-6 bg-black' >
              <div className='w-full h-[600px]  my-10 flex flex-col gap-16  justify-center text-xl font-semibold '>
                <button className=' text-white text-xl py-6 px-0  rounded-md bg-gradient-to-r from-cyan-600 to to-blue-800 cursor-pointer hover:boxshadow duration-500'>Create Your Own ERC20 Token</button>
                <button className=' text-white text-xl py-6 px-0  rounded-md bg-gradient-to-r from-cyan-600 to to-blue-800 cursor-pointer hover:boxshadow duration-500'>Create Your Own NFT</button>
                <button className=' text-white text-xl py-6 px-0  rounded-md bg-gradient-to-r from-cyan-600 to to-blue-800 cursor-pointer hover:boxshadow duration-500'>Create Your Own Dapp</button>
                <button className=' text-white text-xl py-6 px-0  rounded-md bg-gradient-to-r from-cyan-600 to to-blue-800 cursor-pointer hover:boxshadow duration-500'>Create Your Own Defi PLatform</button>
              </div>
          </div>

          <div  className='w-[50%] '>
             <ERC20Token/>
          </div>
      </div>


      

    </div>
  );
};

export default App;
