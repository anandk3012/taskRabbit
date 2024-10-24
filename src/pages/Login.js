import React from 'react'

export default function Login() {
    

    return (
        <div>
            <div className='w-full flex justify-center items-center bg-gray-400 '>
                <form action="post" className='flex flex-col w-1/2 mx-auto  '  >
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" placeholder='Email' name='email' />
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder='Enter password..' name='password' />

                    <button type="submit">Login</button>
                </form>
            </div>


        </div>
    )
}
