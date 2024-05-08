import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import myStore from '../../../Redux/store';
import { deposit, repayLoan, requestLoan, withdraw } from './accountSlice';

const ReactReduxBank = () => {
  
  const [depositAmount,setDepositAmount] = useState()
  const [withdrawAmount,setWithdrawAmount] = useState()

  const [loanAmount,setLoanAmount]= useState()
  const [loanPurpose,setLoanPurpose] = useState()
  
  const dispatch = useDispatch()

  

  return (
    <div className=" mt-8 bg-gray-100 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Your account operations</h2>

        <div className="mb-4">
          <label htmlFor="deposit" className="block text-gray-700 font-semibold mb-2">
            Deposit
          </label>
          <div className="flex">
            <input
              id="deposit"
              type="number"
              // value={amount}
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter amount"
              onChange={(e)=>setDepositAmount(e.target.value)}
            />
            <select className="px-4 py-2 rounded-r-md border border-gray-300 bg-white">
              <option>US Dollar</option>
            </select>
            <button 
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>dispatch(deposit(Number(depositAmount)))}
            >
              DEPOSIT
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="withdraw" className="block text-gray-700 font-semibold mb-2">
            Withdraw
          </label>
          <div className="flex">
            <input
              id="withdraw"
              type="number"
              value={withdrawAmount}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter amount"
              onChange={(e)=>setWithdrawAmount(e.target.value)}
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>dispatch(withdraw(withdrawAmount))}
            >
              WITHDRAW
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-gray-700 font-semibold mb-2">
            Request loan
          </label>
          <div className="flex">
            <input
              id="loanAmount"
              type="number"
              className="w-2/3 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Loan amount"
              onChange={(e)=>setLoanAmount(e.target.value)}
            />
            <input
              type="text"
              className="w-1/3 px-4 py-2 rounded-r-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Loan purpose"
              onChange={(e)=>setLoanPurpose(e.target.value)}
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>dispatch(requestLoan(Number(loanAmount),loanPurpose))}>
              REQUEST LOAN
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Pay back $2000 (Buy a car)</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={()=>dispatch(repayLoan())}>
            PAY LOAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactReduxBank;