import React from 'react'
import { buystock } from './investmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import myStore from '../../Redux/store';
import { invest } from '../features/accounts/accountSlice';

const InvestmentProfile = () => {
  const dispatch = useDispatch()
  const stocks = [
    {
      id: 1,
      price: 150.00,
      codeName: 'AAPL'
    },
    {
      id: 2,
      price: 250.00,
      codeName: 'GOOGL'
    },
    {
      id: 3,
      price: 200.00,
      codeName: 'AMZN'
    },
    {
      id: 4,
      price: 300.00,
      codeName: 'MSFT'
    },
    {
      id: 5,
      price: 100.00,
      codeName: 'FB'
    }
  ];
  const portfolioValue=useSelector((state)=>state.investment.totalPortfolioValue)
  const handleBuy=(price,name)=>
  {
    console.log(myStore.getState())
    dispatch(buystock(price,name))
    dispatch(invest(Number(price)))
  }

  return (
    <div className=" mt-8 bg-gray-100 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Invest in Stocks{portfolioValue}</h2>
         
          {
            stocks.map((each)=>{
              return(
                <div key={each.id} className='flex justify-between  mb-2 bg-green-500 px-4 py-1 rounded-xl '>
          <span className='px-2 py-1 rounded-xl m-2 font-bold'>
            {each.codeName}--${each.price}</span>
          <button 
          className='bg-blue-700 px-2 py-1 rounded-xl m-2'
          onClick={()=>handleBuy(each.price,each.codeName)}>Buy</button>
          </div>
              )
            })
          }
    </div>
    </div>
  )
}

export default InvestmentProfile