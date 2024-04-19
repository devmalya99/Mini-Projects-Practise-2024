import { useEffect, useReducer } from "react";
import Form from "../components/form";
import Display from "../components/taskList";

const savedTask = localStorage.getItem('tasks')
const initialState = {
  taskArr: savedTask ? JSON.parse(savedTask) : []
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

    default:
      throw new Error("Action type unknown");
  }
};

const MainFile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(state.taskArr))
  },[state.taskArr])
  return (
    <>
      <Form dispatch={dispatch} />
      <Display taskArr={state.taskArr} dispatch={dispatch}/>
    </>
  );
};

export default MainFile;
