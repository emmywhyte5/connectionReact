import React, { useState } from "react";

function Signup() {
    let [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    let handleChange = (joe) => {
    
        setFormData({ ...formData, [joe.target.name]: joe.target.value });
    };
    let handleSubmit = (event) => {
        event.preventDefault();

        const response=async () => {
            try {
                const res = await fetch('https://node-assign.onrender.com/user/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                console.log('Success:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        response();

    
    };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white flex-col">
        <h1 className="text-4xl font-bold">Sign Up Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-80 mt-4 space-y-4">
            <label className="flex flex-col">
                <span className="text-lg">Full Name:</span>
                <input onChange={handleChange} type="text" name="fullname" className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded" />
            </label>

            <label className="flex flex-col">
                <span className="text-lg">Email:</span>
                <input onChange={handleChange} type="email" name="email" className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded" />
            </label>

            <label className="flex flex-col">
                <span className="text-lg">Password:</span>
                <input onChange={handleChange} type="password" name="password" className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded" />
            </label>
            <button type="submit" className="mt-4 p-2 bg-blue-500 rounded">Sign Up</button>

          
        </form>


    </div>
  );
}

export default Signup;