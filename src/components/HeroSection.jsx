import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HeroSection = () => {
  return (
    <section
        id="hero"
        className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div
            className='container max-w-4xl mx-auto text-center z-10'
        >
            <div
                className='space-y-6'
            >
                <h1
                    className='text-4xl md:text-6xl font-bold tracking-tight'
                >
                    <span
                        className='opacity-0 animate-fade-in'
                    > Hello, I'm </span>
                    <span
                        className='text-primary opacity-0 animate-fade-in-delay-1'
                    > Alexander</span>
                    <span
                        className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'
                    > Birdsall</span>
                </h1>
                <p
                    className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3  '
                >
                    The universe is a complex system full of mysterious forces: gravity, time, and React’s rendering cycle. 
                    I try to make small corners of it behave nicely on screens. Some call that ‘development’. 
                    I call it a truce with entropy.
                </p>
                <div
                    className='pt-4 opacity-0 animate-fade-in-delay-4'
                >
                    <a  
                        href='#projects'
                        className='cosmic-button'
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce '
        >
            <span
                className='text-sm text-muted-foreground mb-2'
            >
                Scroll
            </span>
            <ArrowDown size={24}/>
        </div>
    </section>
  )
}
