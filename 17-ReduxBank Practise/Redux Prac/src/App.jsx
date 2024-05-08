

import { useSelector } from 'react-redux'
import './App.css'


import ReactReduxBank from './Components/features/accounts/ReactReduxBank'
import CustomerForm from './Components/features/customers/CustomerForm'
import WelcomeCustomr from './Components/features/customers/WelcomeCustomr'

import InvestmentProfile from './Components/investments/InvestmentProfile'

function App() {

  const user = useSelector((store)=>store.customer)
  const balance = useSelector((store)=>store.account.balance)
  console.log(balance)

  return (
<div className='container mx-auto px-4 pt-4'>
  {
    user.fullName.length>0 ? 
    <div>
    <WelcomeCustomr/> 
    <ReactReduxBank/>
    </div>
    :
    <CustomerForm/>
  }
  {
    balance>1000 && <InvestmentProfile/>
  }
  
   
   
  
  

 
</div>
  )
}

export default App
