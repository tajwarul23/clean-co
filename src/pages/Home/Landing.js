import React from 'react';
import bucketGirl from '../../assets/Images/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-60vh bg-accent mt-16 ">
                <div class="hero-content flex-col lg:flex-row z-20 relative">

                    <div className='w-full'>
                        <h1 className='text-2xl ' data-aos="fade-up"  data-aos-duration='1000'>Best Quality</h1>
                        <h1 class="text-5xl font-bold" data-aos="fade-left" data-aos-duration='1500'>Professional Cleaning Service</h1>
                        <p class="py-6" data-aos="fade-right" data-aos-duration='2000'>Best Quality Cleaning Service for your indoor and outdoor Places.</p>
                        <button class="btn btn-primary"  data-aos="zoom-in-up" data-aos-duration='2200'>Get Started</button>
                    </div>
                    <img src={bucketGirl} alt=""  data-aos="fade-up"  data-aos-duration='1000' />
                </div>
            </div>
            <div className='rounded-2xl mx-auto w-5/6 shadow-lg p-10 mt-[-50px] bg-base-300 z-50 relative' data-aos="fade-up"  data-aos-duration='3000'  >
                <h1 className='text-3xl text-primary font-bold '>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 gap-x-4 gap-y-2 mt-5 sm:grid-cols-2'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <button   className='btn btn-primary mt-4'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;