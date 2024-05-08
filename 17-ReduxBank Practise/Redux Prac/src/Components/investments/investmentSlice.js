
//Initial State

const initialInvestmentState = {
    totalPortfolioValue:0,
    quantity:0,
    stocks:[]
    
}

//Reducers
export default function InvestmentReducer(state=initialInvestmentState,action)
{
    switch(action.type){
        case 'investment/buy':
        {
            return({...state, totalPortfolioValue:state.totalPortfolioValue+action.payload.stockprice,

             stocks:[...state.stocks,action.payload.name]   
            })

        }
        default:
        {
            return state
        }
    }
}

//Action Creator
export const buystock=(stockprice,name)=>{
    
    return ({type:'investment/buy', payload:{stockprice,name}})

}