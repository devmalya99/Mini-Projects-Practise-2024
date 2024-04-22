// import React, { useState } from "react";
// import Endpage from "./Endpage";
// import Progressbar from "./Progressbar";

// const QuestionPage = ({ question,dispatch,index }) => {
//   console.log(question);
//   const opt = question?.options;
//   const correctIdx=question?.correctOption
//   console.log(correctIdx);
  
//   const [isCorrect,setIsCorrect]= useState(null)
//   const [hasAnswered,setHasAnswered] = useState(false)
  

//   const handleAnswerClick =(i)=>{
//     dispatch({
//         type:'answerMarked',
//         isCorrect:(i===correctIdx)
//     })
//     setHasAnswered(true)
    
//   }
//   const handleNextQuestion =()=>{
//     index<14 ?
//     dispatch({type:'nextQuestion'})
//     :
//     dispatch({type:'finished'})
//     setHasAnswered(false)
//   }
  

//  return(
//     <div className="flex justify-center items-center flex-col"> 
//      <div>
//         <Progressbar 
//         className='rounded-xl '
//         index={index} total={15}/>
//       </div>
//     <p className="text-white text-2xl ml-4 mt-12 mb-6">{question.question}</p>
//     <div>
//       {opt.map((each, i) => {
//         return (
//           <div key={i} className="px-4 py-2"
//           disabled={hasAnswered}
//           onClick={()=>handleAnswerClick(i)}
//           >
//             <div className={`mb-2 rounded-xl w-full px-4 py-2 option-hover ${hasAnswered && (i===correctIdx ? 'bg-green-700' : 'bg-red-400')}`}
//             >
//                 <span>{each}</span>
//                 {hasAnswered &&
//                 <span> {i===correctIdx ? '✅' : '❌'}</span>
//                 }
                
//             </div>
           
//           </div>
          
//         );
        
//       })}
//     </div>
    
    
//          <button onClick={handleNextQuestion}
//          className="p-2 bg-blue-500 text-white rounded"
//          >Next</button>
    
// </div>
//   )

// };

// export default QuestionPage;


import React, { useState } from "react";
import Endpage from "./Endpage";
import Progressbar from "./Progressbar";

const QuestionPage = ({ question, dispatch, index }) => {
  const opt = question?.options;
  const correctIdx = question?.correctOption;
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerClick = (i) => {
    dispatch({ type: 'answerMarked', isCorrect: (i === correctIdx) });
    setHasAnswered(true);
  };

  const handleNextQuestion = () => {
    index < 14 ? dispatch({ type: 'nextQuestion' }) : dispatch({ type: 'finished' });
    setHasAnswered(false);
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <div className="w-4/5 md:w-3/5 lg:w-1/2">
        <Progressbar index={index} total={15} />
        <p className="text-white text-2xl mb-8">{question.question}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opt.map((each, i) => (
            <div key={i} className="px-4 bg-rose-300  py-2" disabled={hasAnswered} onClick={() => handleAnswerClick(i)}>
              <div
                className={`mb-2 rounded-xl w-full px-4 py-2 bg-red-100 option-hover ${
                  hasAnswered && (i === correctIdx ? 'bg-green-700' : 'bg-red-400')
                }`}
              >
                <span>{each}</span>
                {hasAnswered && <span> {i === correctIdx ? '✅' : '❌'}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
       
        <button
          className="px-8 py-3 mt-8 option-hover rounded-full bg-white text-purple-600 font-bold hover:bg-red-600 hover:text-white transition-colors duration-300"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Reset quiz
        </button>
        <button onClick={handleNextQuestion} className="px-8 py-3 mt-8 option-hover  rounded-full bg-white text-purple-600 font-bold hover:bg-green-600 hover:text-white transition-colors duration-300">
          Next
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default QuestionPage;