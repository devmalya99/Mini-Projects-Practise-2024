import { createStore, combineReducers } from "redux";
import accountReducer from "../Components/features/accounts/accountSlice";
import customerReducer from "../Components/features/customers/customerSlice";
import InvestmentReducer from "../Components/investments/investmentSlice";


const rootReducer = combineReducers(
    {
        account: accountReducer,
        customer:customerReducer,
        investment:InvestmentReducer
    }
)

const myStore = createStore(rootReducer)

export default myStore;

// myStore.dispatch({type:'account/deposit',payload: 500})

// myStore.dispatch({type:'account/withdrawl',payload: 100})

// myStore.dispatch({type:'account/requestLoan', payload:{amount:2000, purpose:'Personal loan'}})

// myStore.dispatch({type:'account/repayLoan'})







