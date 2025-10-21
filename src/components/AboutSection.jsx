import React from 'react'

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
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}
