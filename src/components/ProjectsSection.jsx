import { ArrowDown, ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'


const Projects = [
    {
        id: 1,
        title: "My website page thing",
        description: " an excellent webapp that does tings to more tings",
        image: "/projectScreenShots/filler1.png",
        tags: ["React", "TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    }, {
        id: 2,
        title: "2nd My website page thing",
        description: " an excellent webapp that does tings to more tings",
        image: "/projectScreenShots/filler2.png",
        tags: ["React", "TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    },{
        id: 3,
        title: "3rd My website page thing",
        description: " an excellent webapp that does tings to more tings",
        image: "/projectScreenShots/filler3.png",
        tags: ["React", "TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    }
]

export const ProjectsSection = () => {


  return (
    <section
        id="projects"
        className='py-24 px-4 relative'
    >
        <div
            className='container mx-auto max-w-5xl '
        >
            <h2
                className='text-3xl md:text-4xl font-bold mb-4 text-center'
            >
                Featured <span className='text-primary'> Projects</span>
            </h2>

            <p
                className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'
            >
                Here are some of my recent projects.
                Each one was crafted with the user experience in mind.
            </p>

            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
                {Projects.map((project, key) => {
                    return(
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div
                                className='h-48 overflow-hidden'
                            >
                                <img 
                                    src={project.image}
                                    alt={project.title} 
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                />
                            </div>

                            <div
                                className='p-6'
                            >
                                <div
                                    className='flex flex-wrap gap-2 mb-4'
                                >
                                   {project.tags.map((tag, key) => (
                                        <span 
                                            key={key}
                                            className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'
                                        >
                                            {tag}
                                        </span>
                                    ))} 
                                </div>
                                <h3
                                    className='text-xl font-semibold mb-1'
                                    >
                                    {project.title}
                                </h3>
                                <p
                                    className='text-muted-foreground text-sm mb-4'
                                    >
                                    {project.description}
                                </p>
                                <div
                                    className='flex justify-between items-center'
                                    >
                                    <div
                                        className='flex space-x-3'
                                        >
                                        <a 
                                            href={project.demoURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                            >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.githubURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                            >
                                            <Github />
                                        </a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                className='text-center mt-12'
            >
                <a 
                    href="#"
                    target='_blank'
                    className='cosmic-button w-fit flex items-center mx-auto gap-2'
                >
                    Check My Githyub <ArrowRight size={16} />
                </a>
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
