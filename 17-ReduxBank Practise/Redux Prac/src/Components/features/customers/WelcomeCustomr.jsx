import React from 'react'
import { useSelector } from 'react-redux'
import myStore from '../../../Redux/store'

const WelcomeCustomr = () => {
  const customer=useSelector((store)=>store.customer.fullName)
  const balance=useSelector((store)=>store.account.balance)
  const portfolioValue = useSelector((store)=>store.account.holdingsValue)
  const id=useSelector((store)=>store.customer.nationalId)
  console.log(myStore.getState())
  
  return (
    <div className="flex flex-col mb-6 bg-green-200 rounded-lg px-4 py-2 mt-8">
      <div className='flex justify-between'>
    <h1 className="text-2xl font-bold">The React-Redux Bank</h1>
    <span className="text-xl font-semibold">Acc Balance:{balance}</span>

    <span className="text-xl font-semibold">Portfolio value:{portfolioValue}</span>
    </div>
    <p className="text-lg mb-6">Welcome {customer}</p>
    <p className="text-lg mb-6">{id}</p>
  </div>
  )
}

export default WelcomeCustomr