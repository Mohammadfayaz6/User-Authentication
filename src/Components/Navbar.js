import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged Out");
    navigate('/');
  };

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <nav className='text-[#DBDDEA] flex items-center text-lg'>
        <NavLink to='/'>Home</NavLink>
      </nav>

      <div className='md:flex items-center gap-x-4 hidden'>
        {!isLoggedIn ? (
          <>
            <NavLink to='/login'>
              <button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>Login</button>
            </NavLink>
            <NavLink to='/signup'>
              <button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600' >SignUp</button>
            </NavLink>
          </>
        ) : (
          <>
            <button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600' onClick={handleLogout}>Logout</button>
            <NavLink to='/dashboard'>
            <button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>
                     Dashboard
                  </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
