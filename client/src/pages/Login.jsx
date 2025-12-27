import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const LoginHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/users/login",
        user,
        { headers: { "Content-Type": "application/json" }, withCredentials: true });
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/');
      }


    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");

    }


  }
  return (
    <div className='flex flex-col gap-3 max-w-md mx-auto mt-10'>
      <Input 
        value={user.email} 
        name="email" 
        onChange={changeHandler} 
        type="text" 
        placeholder='Email' 
      />
      <Input 
        value={user.password} 
        name="password" 
        onChange={changeHandler} 
        type="password" 
        placeholder='Password' 
      />
      <Button 
        onClick={LoginHandler} 
        className='w-full text-white'
      >
        Login
      </Button>
    </div>
  )
}

export default Login
