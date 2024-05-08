import { createStore, combineReducers } from "redux";

const initialAccountState = {
    balance : 0,
    loan:0,
    loanPurpose:'',
}

const initialCustomerState ={
  fullName: '',
  nationalId:'',
  createdAt:'',
}
  
const accountReducer=(state=initialAccountState,action)=>
{
    switch (action.type) {
        case 'account/deposit':
        {    
        return {...state,balance: state.balance+action.payload}
        }

        case 'account/withdrawl':
            {
                return {...state,balance:state.balance-action.payload}            
            }

            case 'account/requestLoan' : 
            {
                return {...state, 
                    loan: action.payload.amount,

                    balance: state.balance+action.payload.amount,

                    loanPurpose:action.payload.purpose
                }
            }
            case 'account/repayLoan' : 
            {
                return {
                    ...state,
                    balance:state.balance-state.loan,

                    loan:0,

                    loanPurpose:''
                }
            }
        
        default:
            return state;
    }
}

const customerReducer=(state=initialCustomerState,action)=>{
    switch (action.type){
        case 'customer/createCustomer' :{
            return {...state,
                fullName:action.payload.fullName,
                nationalId:action.payload.nationalId,
                createdAt:action.payload.createdAt

            }
        }
        case 'customer/updateName':{
            return {
                ...state,
                fullName:action.payload
            }
        }
        default:
            {
                return state
            }
    }
}
const rootReducer = combineReducers(
    {
        account: accountReducer,
        customer:customerReducer
    }
)

const myStore = createStore(rootReducer)

// myStore.dispatch({type:'account/deposit',payload: 500})

// myStore.dispatch({type:'account/withdrawl',payload: 100})

// myStore.dispatch({type:'account/requestLoan', payload:{amount:2000, purpose:'Personal loan'}})

// myStore.dispatch({type:'account/repayLoan'})


//Action creator for Account

function deposit(amount)
{
   return ({type:'account/deposit',payload: amount})
}
myStore.dispatch(deposit(5000))


function withdraw(amount)
{
    return({type:'account/withdrawl', payload: amount})
}
myStore.dispatch(withdraw(1000))

function requestLoan(amount,purpose)
{
    return ({type:'account/requestLoan' , payload:{amount, purpose}})
}
myStore.dispatch(requestLoan(2000,'Personal'))

function repayLoan()
{
    return ({type:'account/repayLoan'})
}
myStore.dispatch(repayLoan())


//Action creator for Customer
function createCustomer(fullName,nationalId){
    return {
        type:'customer/createCustomer', 
        payload:{fullName,nationalId,createdAt:new Date().toISOString()}
    }
}

function updateName(fullName){
    return {type:'account/updateName',
        payload: fullName
    }
}

myStore.dispatch(createCustomer('dev','4a578e4f5'))


console.log(myStore.getState())