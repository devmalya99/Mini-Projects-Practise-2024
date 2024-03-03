import {toggleVisibility} from '../../Redux/Slices/cartSlice'
import {useDispatch} from 'react-redux'
import ToggleDarkButton  from "../Tools/ToggleButton";
const MainHeader = () => {

    const dispatch = useDispatch()
    const handleToggle = ()=>{
        dispatch(toggleVisibility(true))
    }


  return (
    <header className="flex justify-between p-5 border-b-2 ">
      <h1 className="text-3xl p-2">ReduxCart</h1>
      <nav className="flex">
        <ul>
          <li>
          <button 
          onClick={handleToggle}
          className="px-4 py-2 bg-purple-500 text-slate-50 hover:bg-purple-900 ">
      <span className="">My Cart</span>
      <span className="">1</span>
    </button>
          </li>
          
        </ul>

        <div><ToggleDarkButton/></div>
      </nav>
    </header>
  );
};

export default MainHeader;