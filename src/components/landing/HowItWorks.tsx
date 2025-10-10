import { ArrowRight, ZapIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SignUpButton } from '@clerk/nextjs'

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 outline-hidden z-10 max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-20">
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6'>
          <ZapIcon className='size-4 text-primary' />
          <span className='text-sm font-medium text-primary'>
            Simple Process
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-white">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-3xl max-w-3xl mx-auto leading-relaxed text-gray-500">
          Our streamlined process makes dental care accessible, convenient, and stress-free for
          everyone
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className='relative group'>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/audio.png" alt="Voice Chat" width={40} height={40} className="w-14" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-center text-black">Ask Questions</h2>
              <p className="text-2xl text-gray-800 text-center leading-relaxed mb-6">
                Chat with our AI assistant about any dental concerns. Get instant answers about
                symptoms, treatments, and oral health tips.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                  24/7 Available
                </span>
                <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
            </div>

            {/* Step 2 */}
            <div className='relative group'>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/calendar.png" alt="Book Appointment" width={40} height={40} className="w-14" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-black">Book Appointment</h2>
              <p className="text-2xl text-gray-800 text-center leading-relaxed mb-6">
                Schedule with verified dentists and receive comprehensive follow-up care. Track your
                progress seamlessly.
              </p>
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                  Top Dentists
                </span>
                <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                  Easy Scheduling
                </span>
              </div>
            </div>
            </div>

            {/* Step 3 */}
            <div className='relative group'>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                  3
                </div>
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Image src="/brain.png" alt="AI Brain" width={40} height={40} className="w-14" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center text-black">Get Expert Advice</h2>
                <p className="text-2xl text-gray-800 text-center leading-relaxed mb-6">
                  Receive recommendations based on thousands of dental cases. Our AI
                  provides professional-grade insights.
                </p>
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                    AI-Powered
                  </span>
                  <span className="text-1xl px-3 py-1 bg-black text-primary  rounded-full">
                    Personalized
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Button Container Tap Area CTA */}
          <div className="text-center mt-16">
            <SignUpButton mode="modal">
              <Button size={"lg"} className="bg-primary text-black hover:bg-primary/90 rounded-full font-bold px-10 py-5">
                <ArrowRight /> Get Started Now
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks