

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const LogoutButton = () => {
  const Navigate = useNavigate();

 
  const handleLogOut = async () => {
   
  };
  return (
    <div>
      <button
      className="ml-4 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" 
      onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default LogoutButton;
