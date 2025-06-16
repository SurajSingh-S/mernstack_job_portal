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
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {loading,user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally{
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
      <h1 className='font-bold text-xl mb-5 text-[#38c29d]'>Sign Up</h1>

      <div className='my-2'>
        <Label className="text-black">Full Name</Label>
        <Input
          type="text"
          value={input.fullname}
          name="fullname"
          onChange={changeEventHandler}
          placeholder="full name"
          className="focus:ring-[#38c29d] focus:border-[#38c29d]"
        />
      </div>

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
        <Label className="text-black">Phone Number</Label>
        <Input
          type="text"
          value={input.phoneNumber}
          name="phoneNumber"
          onChange={changeEventHandler}
          placeholder="8080808080"
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

      <div className='flex items-center justify-between flex-wrap gap-4'>
        <RadioGroup className="flex items-center gap-4 my-5">
          <div className="flex items-center space-x-2">
            <Input
              type="radio"
              name="role"
              value="student"
              checked={input.role === 'student'}
              onChange={changeEventHandler}
              className="cursor-pointer accent-[#38c29d]"
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
              className="cursor-pointer accent-[#38c29d]"
            />
            <Label htmlFor="r2" className="text-black">Recruiter</Label>
          </div>
        </RadioGroup>

        <div className='flex items-center gap-2'>
          <Label className="text-black">Profile</Label>
          <Input
            accept="image/*"
            type="file"
            onChange={changeFileHandler}
            className="cursor-pointer focus:border-[#38c29d] focus:ring-[#38c29d]"
          />
        </div>
      </div>

      {
        loading ? (
          <Button className="w-full my-4 bg-[#38c29d] hover:bg-[#2ea585] text-white">
            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4 bg-[#38c29d] hover:bg-[#2ea585] text-white">
            Signup
          </Button>
        )
      }

      <span className='text-sm'>
        Already have an account?{" "}
        <Link to="/login" className='text-[#38c29d] font-bold hover:underline'>Login</Link>
      </span>
    </form>
  </div>
</div>

    )
}

export default Signup