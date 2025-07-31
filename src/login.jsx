import React from "react";
import { useState } from "react";

function Login() {
    let [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    let handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        const response = async () => {
              try {
                const res = await fetch('http://localhost:3021/user/login', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    credentials: 'include',
                    body: JSON.stringify(formData),
                });
                
                const data = await res.json();
                console.log( data);
              } catch (error) {
                console.error('Error:', error);
              }
            };
        response();
    };

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white flex-col">
      <h1 className="text-4xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 mt-4 space-y-4"
      >
        <label className="flex flex-col">
          <span className="text-lg">Email:</span>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-lg">Password:</span>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </label>
         <button type="submit" className="mt-4 p-2 bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
