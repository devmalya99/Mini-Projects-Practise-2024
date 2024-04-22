import { useEffect, useReducer } from "react";
import Form from "../components/form";
import Display from "../components/taskList";
import { setTask } from "../../hooks/useLocalStorage";
import { EditPopUp } from "../components/editTask";



const savedTask = localStorage.getItem('tasks')
const initialState = {
  taskArr: savedTask ? JSON.parse(savedTask) : [],
  showPopup: false,
  id:'',
};
const reducer = (state, action) => {
  switch (action.type) {
    case "AddTask":
      return {
        ...state,
        taskArr: [...state.taskArr, action.payload],
      };

      case 'RemoveTask':
        return {
          ...state,
          taskArr: state.taskArr.filter((_,index)=>index!==action.payload)
        }
        case 'EditTask' :
          return{
            ...state,
            showPopup: !state.showPopup,
            id: action.payload,
            
          }

          case 'UpdateTodo' :
            return{
              ...state,
              showPopup: !state.showPopup,
              taskArr: state.taskArr.map((each,idx)=>{
                return idx===state.id ? action.newTask : each
              })
            }

    default:
      throw new Error("Action type unknown");
  }
};

const MainFile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 

  useEffect(()=>{
   setTask('tasks', state.taskArr)
  },[state.taskArr])

  return (
    <>
    <div className="flex flex-col  justify-center items-center">
      <Form dispatch={dispatch} />
      <Display taskArr={state.taskArr} dispatch={dispatch}/>
    </div>
    {
      state.showPopup && <div className='flex justify-center items-center  '>
      <EditPopUp dispatch={dispatch} content={state.taskArr[state.id]}/>
      </div>
    }
    
      
    </>
  );
};

export default MainFile;
