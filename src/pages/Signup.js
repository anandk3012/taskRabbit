import React from 'react'
import { useState } from 'react';
import { updateUserDataBase } from '../db/users'

export default function SignUp() {

    // User data state management
    const [name, setName] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Form Submit handler
    const handleSubmit = () => {
        const userData = {
            name: name,
            phoneno: phoneno,
            email: email,
            password: password
        }
        updateUserDataBase("add",userData);
    }

    // Check password validity
    const checkValidPassword = () => {
        if (password.length < 8) {
            return true;
        }
        return false;
    }

    const checkConfirmPassword = (p, cp) => {
        return p === cp;
    }

    // Format phone number to 10 digits
    const formatPhoneNumber = (value) => {
        setPhoneno(value.substring(0,10));
    }

    return (
        <div>
            <div className='w-full flex justify-center items-center bg-black p-3 text-lg text-white'>
                <form action="post" className='flex flex-col w-1/2 mx-auto  '  >

                    <label htmlFor="name">Name: </label>
                    <input className='w-full p-2 rounded-md text-black' type="text" placeholder='Name' name='name' onChange={(e) => { setName(e.target.value) }} required />

                    <label htmlFor="phoneno">Phone Number: </label>
                    <input className='w-full p-2 rounded-md text-black'  type="text" placeholder='Phone No.' name='phoneno' value={phoneno} onChange={(e) => { formatPhoneNumber(e.target.value) }} required />

                    <label htmlFor="email">Email Address: </label>
                    <input className='w-full p-2 rounded-md text-black'  type="email" placeholder='Email' name='email' onChange={(e) => { setEmail(e.target.value) }} required />


                    <label htmlFor="password">Password: </label>
                    <input className='w-full p-2 rounded-md text-black'  type="password" placeholder='Enter password..' name='password' onChange={(e) => { setPassword(e.target.value) }} />
                    {checkValidPassword() && <p className='text-red text-bold'>Please enter a password of 8-10 characters</p>}

                    <label htmlFor="confirmpassword" disabled >Confirm Password: </label>
                    <input className='w-full p-2 rounded-md text-black'  type="password" placeholder='Confirm password..' name='confirmpassword' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    

                    <button className=' w-fit text-xl p-3 bg-black text-white mx-auto rounded-md m-5' type="submit" onSubmit={handleSubmit} disabled={!checkConfirmPassword(password, confirmPassword) && !password} >SignUp</button>
                </form>
            </div>


        </div>
    )
}
