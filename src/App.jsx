// App.js
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ERC20Token from "./components/ERC20Token";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-screen">
      <div className="h-[65px] bg-slate-700 flex items-center  ">
        <div className="w-full px-5 flex justify-between items-center ">
          <h1>Testing</h1>
          <ConnectButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className="w-[30%] px-6 bg-gradient-to-b from-slate-800 to bg-gray-500 h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-semibold mb-10">
            Get Started <br /> <span className="ml-16 ">With...</span>
          </h1>
          <div className="my-10 flex flex-col gap-14 text-white">
            <button
              onClick={() => setShow(!show)}
              className="text-xl py-3 px-4 rounded-md bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            >
              Create Your Own ERC20 Token
            </button>
            <button className="text-xl py-3 px-4 rounded-md bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300">
              Create Your Own NFT
            </button>
            <button className="text-xl py-3 px-4 rounded-md bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300">
              Create Your Own Dapp
            </button>
            <button className="text-xl py-3 px-4 rounded-md bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300">
              Create Your Own Defi Platform
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-[80%] ">{show && <ERC20Token />}</div>
      </div>
    </div>
  );
};

export default App;
