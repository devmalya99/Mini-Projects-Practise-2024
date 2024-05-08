
const initialAccountState = {
    balance : 0,
    holdingsValue:0,
    loan:0,
    loanPurpose:'',
}

export default function accountReducer(state=initialAccountState,action)
    {
        switch (action.type) {
            case 'account/deposit':
            {    
            return {...state,balance: state.balance + action.payload}
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

                case 'account/investments' :
                    {
                        return {
                            ...state,
                            balance:state.balance-action.payload,
                            holdingsValue:state.holdingsValue+action.payload
                        }
                    }
            
            default:
                return state;
        }
    }

    //Action creator for Account

    export function deposit(amount)
{
   return ({type:'account/deposit',payload: amount})
}
export function invest(amount)
{
    return ({type:'account/investments', payload:amount})
}



export function withdraw(amount)
{
    return({type:'account/withdrawl', payload: amount})
}


export function requestLoan(amount,purpose)
{
    return ({type:'account/requestLoan' , payload:{amount, purpose}})
}




export function repayLoan()
{
    return ({type:'account/repayLoan'})
}

