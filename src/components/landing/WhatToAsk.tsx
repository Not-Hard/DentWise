import { MessageCircle, MessageSquareIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const WhatToAsk = () => {
  return (
    <section className="relative px-6 outline-hidden z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className='text-center mb-20'>
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6'>
          <MessageCircle className='text-primary' size={16} />
          <span className='text-sm font-medium text-primary'>
             AI-Powered Conversation
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
          Ask about <br /><span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">anything dental</span>
        </h2>

        {/* Description */}
        <p className="text-3xl max-w-3xl mx-auto leading-relaxed text-gray-500">
          From simple questions to complex concerns, our AI delivers expert-level guidance trained
            on thousands of real dental cases
        </p>
      </div>

      {/* Example Questions */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
        {/* Left Content Devided by three vertical sections */}
        {/* Left Side - Interactive Chat Examples */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-white">Common questions our AI answers:</h3>

              {/* Chat Bubble 1 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "My tooth hurts when I bite down"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm leading-relaxed text-black">
                          Get immediate advice on pain management, possible causes, and when to see
                          a dentist urgently
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Instant Response
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Pain Relief
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "How much does teeth whitening cost?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-black leading-relaxed">
                          Compare treatment options, pricing ranges, and find the best whitening
                          solution for your budget
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Cost Analysis
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Treatment Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 3 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "When should I replace my filling?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-black leading-relaxed">
                          Learn about filling lifespan, warning signs of wear, and replacement
                          timing guidance
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Preventive Care
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Maintenance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Right Image */}
        <div className="relative w-full h-96 lg:h-[540px]">
          <Image
            src="/confused.png"
            alt="Dentist Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>


    </section>
  )
}

export default WhatToAsk