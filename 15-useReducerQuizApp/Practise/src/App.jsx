import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import LoaderComp from "./Components/Loader";
import ErrorPage from "./Components/ErrorPage";
import QuestionPage from "./Components/QuestionPage";
import ReadyPage from "./Components/ReadyPage";
import questions from "./data/questions-data";
import Endpage from "./Components/Endpage";
import TimerContext from "./Timer-Context";

const Time_PER_QUESTION = 30;
const initialState ={
  questions:questions,
  status:'ready',
  index:0,
  hasAnswered:false,
  isCorrect:null,
  points:0,
  heighestScore:0,
  secondsRemaining:null,
}
const reducer = (state,action)=>{
  switch (action.type) {
    // case 'dataRecieved' :
    //   return {
    //     ...state,
    //     questions: action.payload,
    //     status:'ready',
    //     index:0
    //   }
      case 'errorLoading':
        return{
          ...state,
          status:'loading failed'
        }
        case 'startQuiz':
        return {
          ...state,
          status:'active',
          index:0,
          secondsRemaining:questions.length*Time_PER_QUESTION
        }
        case 'answerMarked' :
          return {
            ...state,
            isCorrect: action.isCorrect,
            hasAnswered : true,
            
            points : action.isCorrect ? state.points+10 : state.points-5
            
          }
          case 'nextQuestion':
            return {
              ...state,
              index:state.index+1 ,

              hasAnswered:false //reset hasAnswred for nextWuestion
            }
            case 'finished':
              return {
                ...state,
                status:'finished',
                heighestScore: state.points > state.heighestScore ? state.points : state.heighestScore
              }
              case 'restart':
                return {
                  ...initialState,
                  questions:state.questions,
                  status:'ready'
                }
                case 'timer' : 
                return {
                  ...state,
                  secondsRemaining: state.secondsRemaining-1,
                  status: state.secondsRemaining===0 ? 'finished' : state.status
                }
      default :
      throw new Error('Action type Unkown')
  }
}

function App() {
  const [{status,questions,index,points,heighestScore , secondsRemaining},dispatch] = useReducer(reducer,initialState)

  //this is when you have live api
  // useEffect(()=>{
  //   fetch('http://localhost:8000/questions')
  //   .then((res)=>res.json())
  //   .then((data)=>dispatch({type:'dataRecieved' , payload:data}),)
  //   .catch(()=>dispatch({type:'errorLoading'}))
  // },[])



  const maxPoints = questions
  .length * 10

  const contextValue ={
    secondsRemaining,
    dispatch
  }



  return (
    <TimerContext.Provider value={contextValue} >
    <div className="container  px-4 pt-4 h-screen w-full "> 
      
      <Header points={points}/>
     
      <Main>
        {/* {status==='loading' && <LoaderComp/>} */}
        {status==='ready' && <ReadyPage dispatch={dispatch}/>}
        
        {status==='active' && <QuestionPage question={questions[index]} dispatch={dispatch} index={index}/>}
        {status ==='finished' && 
        <Endpage points={points} maxPoints={maxPoints} heighestScore={heighestScore} dispatch={dispatch}/>}
        

        {status==='loading failed' && <ErrorPage message={'Failed to Load data'}/>}
      </Main>
    
    </div>
    </TimerContext.Provider>
  );
}

export default App;
