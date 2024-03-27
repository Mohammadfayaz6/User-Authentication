import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(state => state.auth.users);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setUserEmail(value);
        else if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === userEmail && user.createpassword === password);
        if (user) {
            dispatch({
                type: "LOGIN",
                payload: user,
            });
            toast.success('Logged in successfully');
            navigate('/dashboard');
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className='flex justify-center items-center w-11/12 max-w-[1160px] mx-auto'>
     
            <form className=' flex flex-col  gap-y-4 mt-6 ' onSubmit={handleSubmit}>
                <label className='w-[450px]'>
                    <p className='text-lg leading-[1.375rem] text-[#f1f2ff] mb-1' >Email Address</p>
                    <input
                        type='email'
                        placeholder='Enter user email'
                        name='email'
                        value={userEmail}
                        onChange={handleInputChange}
                        className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full border  border-slate-600  "
                        
                    />
                </label>

                <label className='w-[450px]'>
                    <p className='text-lg leading-[1.375rem] text-[#f1f2ff] mb-1'>Password</p>
                    <input
                        type='password'
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full border  border-slate-600  "
                    />
                </label>

                <button className=" w-full bg-yellow-500 flex justify-center  items-center gap-x-2 rounded-md py-2 px-2 mt-6 font-medium  border border-[#2C333F] mx-auto" type='submit'>
                    <p  className='text-slate-900 text-[16px]' >login</p>
                </button>
            </form>
        </div>
    );
};

export default Login;
