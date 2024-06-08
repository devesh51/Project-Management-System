import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // navigate to login or home page if needed
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <header className="w-full bg-stone-800 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Project Management System</h1>
      <div className="flex items-center">
        {user && <span className="mr-4">{user.displayName}</span>}
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-stone-600 rounded hover:bg-stone-800"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
