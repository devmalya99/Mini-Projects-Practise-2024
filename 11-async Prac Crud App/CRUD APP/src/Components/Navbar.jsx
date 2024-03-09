import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { searchUser } from "../ReduxToolkit/Slices/UserDetailSlice";



    const Header = () => {
      
      const dispatch = useDispatch()
      const [searchData, setSearchData] = useState("");
      const count = useSelector((state) => state.app.users.length);
      

      useEffect(() => {
        dispatch(searchUser(searchData));
      },[searchData])
      
      
      return (
        <header className=" w-full dark:bg-gray-800 bg-gray-50 dark:text-white text-black flex justify-between items-center p-2">
        <h1 className="font-bold text-3xl">My Blog</h1>
        <div className="space-x-4">
          <Link to="/create-post" className="hover:underline">Create Post</Link>
          <Link to="/read" className="hover:underline">All Posts{count}</Link>
        </div>
  
        <input
          type="search"
          className="px-6 py-2 rounded-md dark:bg-gray-600 bg-gray-200 dark:placeholder-gray-300 placeholder-gray-500"
          placeholder="Search..."
          aria-label="Search"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </header>
      );
    };
    
    export default Header;

