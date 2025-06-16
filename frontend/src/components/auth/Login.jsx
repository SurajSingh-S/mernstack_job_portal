import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
        <div> 
  <Navbar />
  <div className='flex items-center justify-center max-w-7xl mx-auto'>
    <form onSubmit={submitHandler} className='w-1/2 border border-[#38c29d] rounded-md p-4 my-10 shadow-md'>
      <h1 className='font-bold text-xl mb-5 text-[#38c29d]'>Login</h1>

      <div className='my-2'>
        <Label className="text-black">Email</Label>
        <Input
          type="email"
          value={input.email}
          name="email"
          onChange={changeEventHandler}
          placeholder="user@gmail.com"
          className="focus:ring-[#38c29d] focus:border-[#38c29d]"
        />
      </div>

      <div className='my-2'>
        <Label className="text-black">Password</Label>
        <Input
          type="password"
          value={input.password}
          name="password"
          onChange={changeEventHandler}
          placeholder="password"
          className="focus:ring-[#38c29d] focus:border-[#38c29d]"
        />
      </div>

      <div className='flex items-center justify-between'>
        <RadioGroup className="flex items-center gap-4 my-5">
          <div className="flex items-center space-x-2">
            <Input
              type="radio"
              name="role"
              value="student"
              checked={input.role === 'student'}
              onChange={changeEventHandler}
              className="cursor-pointer text-[#38c29d] accent-[#38c29d]"
            />
            <Label htmlFor="r1" className="text-black">Student</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="radio"
              name="role"
              value="recruiter"
              checked={input.role === 'recruiter'}
              onChange={changeEventHandler}
              className="cursor-pointer text-[#38c29d] accent-[#38c29d]"
            />
            <Label htmlFor="r2" className="text-black">Recruiter</Label>
          </div>
        </RadioGroup>
      </div>

      {
        loading ? (
          <Button className="w-full my-4 bg-[#38c29d] hover:bg-[#2ea585] text-white">
            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4 bg-[#38c29d] hover:bg-[#2ea585] text-white">
            Login
          </Button>
        )
      }

      <span className='text-sm'>
        Don't have an account?{" "}
        <Link to="/signup" className='text-[#38c29d] font-bold hover:underline'>Signup</Link>
      </span>
    </form>
  </div>
</div>

    )
}

export default Login