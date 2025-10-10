import React from 'react'
import Image from 'next/image';
import { CalendarIcon, MicIcon,StarIcon } from 'lucide-react';
import { SignUpButton } from '@clerk/nextjs';
import { Button } from '../ui/button';

const Hero = () => {
  return ( 
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className='relative z-10 w-full px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-10'>
              <div className='space-y-6'> 
                {/* Badge*/}
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm'>
                  <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                  <span className='text-sm font-medium text-primary'>
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* Title and Description */}
                <h1 className='text-6xl md:text-5xl font-extrabold leading-tight text-white '>
                  Get <span className="text-primary">Instant Answers</span> to Your Dental Questions with DentWise IA
                </h1>
                {/*Subtitle*/}
                <p className='text-lg leading-relaxed max-w-xl font-medium text-gray-500'>
                  Chat with our AI dental assistant for instant advice, book smart appointments, and
                  get personalized care recommendations. Available 24/7.
                </p>
              </div>

               {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size={"lg"} className='bg-primary text-black hover:bg-primary/90 rounded-full font-bold'>
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size={"lg"} variant={"outline"} className='rounded-full font-bold text-white border-white/30 hover:border-white'>
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>


              {/* USER TESTIMONIALS */}
              <div className="pt-8">
                <div className="flex items-center gap-6">
                  {/* USER AVATARS */}
                  <div className="flex -space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Jessica Davis"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      alt="Sam Miller"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                      alt="Anna Lopez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Rodriguez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                      alt="Katie Lee"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                  </div>

                  {/* RATING AND STATS */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold  text-white">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-semibold text-white">1,200+ patients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

        
            {/* Right Image */}
            <div className="relative w-full h-96 lg:h-[540px]">
              <Image
                src="/hero.png"
                alt="Dentist Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero