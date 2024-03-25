import React, { useState } from "react";
import { ethers } from "ethers";
import {
  useAccount,
  useTransactionReceipt,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import abi from "../Contracts/abi/factory.json";
// import ercabi from '../Contracts/abi/ERC20.json';

const ERC20Token = () => {
  const { address } = useAccount();
  const { data: hash, writeContract, isPending } = useWriteContract();
  // const { writeContract1 } = useWriteContract();
  const [contractName, setContractName] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const handleContractNameChange = (e) => {
    setContractName(e.target.value);
  };

  const handleTokenNameChange = (e) => {
    setTokenName(e.target.value);
  };

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleSupplyChange = (e) => {
    setSupply(e.target.value);
  };

  const handleSubmit_next = (e) => {
    e.preventDefault();
    // try {
    //   writeContract1({
    //     ercabi,
    //     address: ''
    //   })
    // } catch (error) {
    //   console.error('An error occurred', error);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      writeContract({
        abi,
        address: "0x360E40E234B94a6E549ae9080E0CBe03Aaa43CA9",
        functionName: "createToken",
        args: [contractName, tokenName, 18, address],
      });
    } catch (error) {
      console.error("Error executing contract:", error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: hash,
    });

  const token = useTransactionReceipt({
    hash,
  });

  // let dt = token.data.logs[0].data;
  // let tokenAddress = ethers.utils.defaultAbiCoder.decode(["address"], dt).toString();

  // console.log(token);

  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-b from-indigo-300 to-gray-900 ">
      {!isConfirmed && (
        <form
          className="flex flex-col gap-6  bg-gray-100 p-8 rounded-lg shadow-md w-[490px]  h-[350px]  border border-blue-100  "
          onSubmit={handleSubmit}
        >
          <input
            required
            className="bg-gray-200 rounded-md px-4 py-2 outline-none focus:bg-white mt-3"
            type="text"
            placeholder="Contract Name"
            onChange={handleContractNameChange}
            value={contractName}
          />
          <input
            required
            className="bg-gray-200 rounded-md px-4 py-2 outline-none focus:bg-white"
            type="text"
            placeholder="Token Name"
            onChange={handleTokenNameChange}
            value={tokenName}
          />
          <input
            required
            className="bg-gray-200 rounded-md px-4 py-2 outline-none focus:bg-white"
            type="text"
            placeholder="Symbol"
            onChange={handleSymbolChange}
            value={symbol}
          />
          <button
            disabled={isPending}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mt-5"
            type="submit"
          >
            {isPending ? "Confirming" : "Submit"}
          </button>
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
        </form>
      )}

      {isConfirmed && (
        <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-lg shadow-md">
          {isConfirmed && (
            <div className="bg-gray-200 rounded-md px-4 py-2">
              <span className="text-gray-700 font-bold">
                Transaction Confirmed
              </span>{" "}
              <br />
              <span className="text-gray-700">Previous Data:</span> <br />
              <span className="text-gray-700">
                Contract Name: {contractName}
              </span>{" "}
              <br />
              <span className="text-gray-700">
                Token Name: {tokenName}
              </span>{" "}
              <br />
              <span className="text-gray-700">Symbol: {symbol}</span>
            </div>
          )}
          <form
            className="flex flex-col gap-6 mt-6"
            onSubmit={handleSubmit_next}
          >
            <input
              className="bg-gray-200 rounded-md px-4 py-2 outline-none focus:bg-white"
              type="number"
              placeholder="Supply"
              onChange={handleSupplyChange}
              value={supply}
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ERC20Token;
