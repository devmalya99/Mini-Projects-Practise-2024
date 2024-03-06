import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slices/ThemeSlice";
const ToggleButton = () => {
  const dispatch = useDispatch();
  const currTheme = useSelector((state) => state.theme.currTheme);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="p-2 bg-slate-300  rounded-xl ml-4 hover:text-xl hover:bg-slate-500 dark:bg-white dark:text-black">
      <button onClick={handleThemeToggle}>{currTheme ? "🌞" : "🌙"}</button>
    </div>
  );
};

export default ToggleButton;
