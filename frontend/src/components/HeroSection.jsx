import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    


    return (
        <div className="text-center  py-16">
            <div className="flex flex-col gap-6 my-10 max-w-4xl mx-auto">


                <span className="mx-auto px-6 py-2 rounded-full bg-gray-100 text-[#159372] font-semibold shadow">
                    No. 1 Job Scouting Website
                </span>


                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
                    Search, Apply & <br /> Get Your <span className="text-[#38c29d]">Dream Jobs</span>
                </h1>


                <p className="text-gray-600 font-bold text-lg max-w-2xl mx-auto">
                    In the digital age, your next opportunity is just a click away—make it count. 
                </p>


                <div className="flex w-full md:w-[40%] bg-white shadow-md border border-gray-200 rounded-full overflow-hidden mx-auto">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none px-5 py-3 w-full text-gray-700"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="bg-[#38c29d] hover:bg-[#38c29d] rounded-none rounded-r-full flex items-center justify-center h-full px-6 py-4"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>


            </div>
        </div>
    );

}

export default HeroSection