import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

   return (
        // <div>
        //     <Carousel className="w-full max-w-xl mx-auto my-20">
        //         <CarouselContent>
        //             {
        //                 category.map((cat, index) => (
        //                     <CarouselItem className="md:basis-1/2 lg-basis-1/3">
        //                         <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
        //                     </CarouselItem>
        //                 ))
        //             }
        //         </CarouselContent>
        //         <CarouselPrevious />
        //         <CarouselNext />
        //     </Carousel>
        // </div>
        <div>
  <Carousel className="w-full max-w-6xl mx-auto my-20 px-4">
    <CarouselContent className="flex gap-6">
      {category.map((cat, index) => (
        <CarouselItem
          key={index}
          className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
        >
          <Button
            onClick={() => searchJobHandler(cat)}
            variant="outline"
            className="rounded-full px-8 py-4 text-lg border-2 border-[#38c29d] text-[#38c29d] hover:bg-[#38c29d] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            {cat}
          </Button>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>

    )

    
}

export default CategoryCarousel