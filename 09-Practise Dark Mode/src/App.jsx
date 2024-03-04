import Profile from "./Components/Profile.jsx";
import "./App.css";
import { useSelector , useDispatch } from "react-redux";
import { currentTheme ,switchTheme } from "./Redux/ThemeSlice.js";
function App() {
  const dispatch=useDispatch()
  const newTheme = useSelector(currentTheme);
  return (
    <div className={newTheme?"dark":"light"}>
      <div className="first-letter:container mx-auto px-4 pt-4">
      <div className="dark:bg-blue-500 bg-red-500 w-16 h-16 mb-8 rounded-2xl ">
        <button 
        onClick={()=>dispatch(switchTheme())}
        className="text-white">Switch Theme</button>
      </div>

      <div className="dark:bg-gray-500">
        <h1>My Page </h1>
        <Profile />
      </div>
    </div>
    </div>
    
  );
}

export default App;
