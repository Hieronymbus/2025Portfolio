import React from 'react'
import { cn } from '../library/utils'
import { ArrowDown, Briefcase, Code, User } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section
        id="about"
        className='relative py-24 px-4'
    >
        <div
            className='container mx-auto max-w-5xl'
        >
            <h2
                className='text-3xl md:text-4xl font-bold mb-12 text-center'
            >
                <span>About </span>
                <span 
                    className='text-primary'
                >Me</span>
            </h2>
            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '
            >
                <div
                    className='space-y-6'
                >
                    <h3
                        className='text-2xl font-semi-bold'
                    >Passionate web developer & tech maker </h3>
                    <p
                        className='text-muted-foreground'
                    >
                        I’m a junior web developer with a passion for creating interactive and user-friendly web experiences. 
                        I enjoy turning ideas into functional interfaces, 
                        experimenting with modern technologies, and continuously learning new ways to improve my craft.
                    </p>
                    <p
                        className='text-muted-foreground'
                    >
                        When I’m not coding, I like exploring creative projects, solving problems, 
                        and diving into new challenges. My goal is to contribute to projects that are both impactful and enjoyable for users, 
                        while growing as a developer every day.
                    </p>

                    <div
                        className=' flex flex-col sm:flex-row gap-4 pt-4 justify-center '
                    >
                        <a 
                            href="#contact"
                            className='cosmic-button'
                        >
                            Get In Touch
                        </a>

                        <a 
                            href="#contact"
                            className={cn('px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10',
                                'transition-colors duration-300'
                            )}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div
                    className='grid grid-cols-1 gap-6 '
                >
                    <div
                        className='gradient-border p-6 card-hover'
                    >
                        <div
                            className='flex items-start gap-4'
                        >
                            <div
                                className='p-3 rounded-full bg-primary/10'
                            >
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div
                                className='text-left'
                            >
                                <h4 className='font-semibold text-lg'> Web Development</h4>
                                <p
                                    className='text-muted-foreground'
                                >
                                    Creating responsive websites and web applications with modern farmeworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='gradient-border p-6 card-hover'
                    >
                        <div
                            className='flex items-start gap-4'
                        >
                            <div
                                className='p-3 rounded-full bg-primary/10'
                            >
                                <User className='h-6 w-6 text-primary'/>      
                            </div>
                            <div
                                className='text-left'
                            >
                                <h4 className='font-semibold text-lg'> UI/UX Design</h4>
                                <p
                                    className='text-muted-foreground'
                                >
                                    Designing intuitive user interfaces and seamless user experiences. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='gradient-border p-6 card-hover'
                    >
                        <div
                            className='flex items-start gap-4'
                        >
                            <div
                                className='p-3 rounded-full bg-primary/10'
                            >
                                <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div
                                className='text-left'
                            >
                                <h4 className='font-semibold text-lg'> Project Management</h4>
                                <p
                                    className='text-muted-foreground'
                                >
                                    Leading  projects from conception to completion with agile methodologies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className='absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce '
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
