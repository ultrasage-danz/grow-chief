import ContentWrapper from "@/components/ContentWrapper"
import IntroImage from "./assets/Group 1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/swiper-bundle.css';
import IntroImage2 from "./assets/Group 2.jpg"


const Testimonial = () => {
    const reviews = [
        { id: 1, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}
        ,{ id: 2, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}
        ,{ id: 3, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}
        ,{ id: 4, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}
        ,{ id: 5, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}
        ,{ id: 6, image: "https://imgur.com/gallery/nphxz", name: 'John Doe', work: 'CEO@Wasp', review: `"Nevo fundamentally changed how we approach dev marketing and made it a whole-team activity that we all enjoy because we see the momentum."`}    
    ,]

    return (
      <section>
        <ContentWrapper>
            <div className="grid grid-cols-3 gap-x-9">
                <div style={{backgroundImage: `url(${IntroImage.src}) `}}/>
                <div className="m-auto mt-64 origin-center place-items-center grid grid-cols-1 gap-y-4 gap-x-2 ">
                    <div className=" ml-32 text-lg text-grow subpixel-antialiased 
                        justify-center  font-sans font-normal tracking-widest leading-loose">
                            <h1>TESTIMONIALS</h1>
                        
                    </div>
                    <h1 className="items-center"><p className="ml-32 text-center   text-5xl font-semibold font-sans  text-transparent 
                        bg-clip-text  bg-gradient-to-b from-white to-slate-500 leading-tight 
                        tracking-wide">
                            What our <br />
                            clients say
                    </p></h1>
                </div>
                <div style={{backgroundImage: `url(${IntroImage2.src}) `}}/>
            </div>
            <div>
                <div>
                    <Swiper>
                        {
                            reviews.map((review, index) => {
                                return(
                                    <SwiperSlide key={index}
                                    >
                                        <div className="bg-card flex-col items-start p-4 space-y-12">
                                            <div className="flex-row items-start px-4 space-y-2"><img className="rounded-full" alt="icon" src={review.image} width={50} height={50}></img>
                                        <h2 className="font-semibold text-lg">{review.name}</h2><h6 className="font-light text-sm">{review.work}</h6></div>
                                        
                                        
                                        <p>{review.review}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
            
        </ContentWrapper>
        
      </section>
    )
}

export default Testimonial
