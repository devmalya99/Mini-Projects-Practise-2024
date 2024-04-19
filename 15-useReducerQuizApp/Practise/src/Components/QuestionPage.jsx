import React, { useState } from "react";

const QuestionPage = ({ question,dispatch }) => {
  console.log(question);
  const opt = question?.options;
  const correctIdx=question?.correctOption
  console.log(correctIdx);
  
  const [isCorrect,setIsCorrect]= useState(null)
  const [clickedIndex, setClickedIndex] = useState(null);
  const [hasAnswered,setHasAnswered] = useState(false)
  

  const handleAnswerClick =(i)=>{
    dispatch({
        type:'answerMarked',
        isCorrect:(i===correctIdx)

    })
  }
  

  return (
    <div className="flex justify-center items-center flex-col">
    <p className="text-white text-2xl ml-4 mt-12 mb-6">{question.question}</p>
    <div>
      {opt.map((each, i) => {
        return (
          <div key={i} className="px-4 py-2"
          onClick={()=>handleAnswerClick(i)}
          
          >
            <div className={`mb-2 rounded-xl w-full px-4 py-2 option-hover ${isCorrect !==null && (i===correctIdx ? 'bg-green-700' : 'bg-red-400')}`}
            >
                <span>{each}</span>
                {
                isCorrect &&
                <span> {i===correctIdx ? '✅' : '❌'}</span>
                }
            </div>
          </div>
        );
      })}
    </div>
    {
        isCorrect!==null &&
         <button onClick={()=>dispatch({type:'nextQuestion'})}
         className="p-2 bg-blue-500 text-white rounded"
         >Next</button>
    }
</div>
  );
};

export default QuestionPage;
