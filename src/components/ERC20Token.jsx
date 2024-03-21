import React, { useState } from 'react';

const ERC20Token = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values:", contractName, tokenName, symbol, supply);
    // You can add logic here to handle the submitted values, like sending them to backend
  };

  return (
    <div>
      <div>
        <form className='flex flex-col gap-32 bg-slate-500' onSubmit={handleSubmit}>
          <input type="text" placeholder='Contract Name' onChange={handleContractNameChange} />
          <input type="text" placeholder='Token Name' onChange={handleTokenNameChange} />
          <input type="text" placeholder='Symbol' onChange={handleSymbolChange} />
          <input type="number" placeholder='Supply' onChange={handleSupplyChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ERC20Token;
