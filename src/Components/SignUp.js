import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const SignUp = () => { 


    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        createpassword: "",
        confirmpassword: ""
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { firstname, lastname, email, createpassword, confirmpassword } = formData;

        // Check if any field is empty
        if (!firstname || !lastname || !email || !createpassword || !confirmpassword) {
            toast.error("Please fill in all fields");
            return;
        }

        // Check if passwords match
        if (createpassword !== confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }

        // Dispatch signup action with form data
        dispatch({
            type: "SIGNUP",
            payload: {
                ...formData
            }
        });

        // Clear form fields after submission
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            createpassword: "",
            confirmpassword: ""
        });

        toast.success("Account created successfully");
    };

    return (
        <div className='flex justify-center items-center w-11/12 max-w-[500px] mx-auto'>
            <form className='  flex flex-col w-full gap-y-4 mx-auto' onSubmit={handleSubmit}>
                <div className=' flex gap-x-4'>
                    <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-[#f1f2ff] mb-1'>First name<sup className='text-[#ef476f]'> *</sup></p>
                        <input
                            type='text'
                            placeholder='Enter Firstname'
                            name='firstname'
                            onChange={handleChange}
                            value={formData.firstname}
                            className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff]  border  border-slate-600 "
                        />
                    </label>

                    <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-[#f1f2ff] mb-1'>Last name<sup className='text-[#ef476f]'> *</sup></p>
                        <input
                            type='text'
                            name='lastname'
                            placeholder='Enter Lastname'
                            onChange={handleChange}
                            value={formData.lastname}
                            className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff]  border  border-slate-600 "
                        />
                    </label>
                </div>

                <label className='w-full'>
                <p className='text-[0.875rem] leading-[1.375rem] text-[#f1f2ff] mb-1'>Email<sup className='text-[#ef476f]'> *</sup></p>
                    <input
                        type='email'
                        placeholder='Enter user email'
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                        className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full border  border-slate-600 "
                    />
                </label>

                <div className=' flex gap-x-4' >
                    <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-[#f1f2ff] mb-1'>create password<sup className='text-[#ef476f]'> *</sup></p>
                        <input
                            type='password'
                            name='createpassword'
                            placeholder='Create password'
                            onChange={handleChange}
                            value={formData.createpassword}
                            className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full border  border-slate-600 "

                            
                        />
                      
                    </label>
                    <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-[#f1f2ff] mb-1'>confirm password<sup className='text-[#ef476f]'> *</sup></p>
                        <input
                            type='password'
                            name='confirmpassword'
                            placeholder='Confirm password'
                            onChange={handleChange}
                            value={formData.confirmpassword}
                            className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full border  border-slate-600 "
                        />
                   
                    </label>
                </div>

                <button
                    type="submit"
                    className="bg-[#ffd60a] py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-[#000814]">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
