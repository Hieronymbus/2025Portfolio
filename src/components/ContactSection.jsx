import { Github, Instagram, Linkedin, Mail, Map, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import { cn } from '../library/utils'
import {useToast} from '@/hooks/use-toast.js'
import React, { useState } from 'react'
import { Description } from '@radix-ui/react-toast'

export const ContactSection = () => {

    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {

            toast({
                title: "Message sent!",
                description: "Thanks for the message. I'll get back to you soon"
            })

            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <section
            id='contact'
            className='py-24 px-4 relative bg-secondary/30'

        >
            <div
                className='container mx-auto max-w-5xl'
            >
                <h2
                    className='text-3xl md:text-4xl font-bold mb-4 text-center'
                >
                    Get In <span className='text-primary'> Touch</span>
                </h2>

                <p
                    className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'
                >
                    Got a project, question, or just want to say hi? 
                    Feel free to reach out—I’d love to hear from you. 
                    You can send me a message using the form above or connect via email or social media.
                </p>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-12'
                >
                    <div
                        className='space-y-8'
                    >
                        <h3 className='text-2xl font-semibold mb-6 '> Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            <div
                                className='flex items-start  space-x-4'
                            >
                                <div
                                    className='p-3 rounded-full bg-primary/10'
                                >
                                    <Mail className='h-6 w-6 text-primary'/>
                                </div>
                                <div
                                    className='w-full flex flex-col justify-center items-start'
                                >
                                    <h4 className='font-medium '> Email</h4>
                                    <a 
                                        href="mailto:birdsallAlexander@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        birdsallAlexander@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div
                                className='flex items-start space-x-4'
                            >
                                <div
                                    className='p-3 rounded-full bg-primary/10'
                                >
                                    <Phone  className='h-6 w-6 text-primary'/>
                                </div>
                                <div
                                    className='w-full flex flex-col justify-center items-start'

                                >
                                    <h4 className='font-medium'> Phone</h4>
                                    
                                    <a 
                                        href="tel:12334556 554 "
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        12334556 554
                                    </a>
                                </div>
                            </div>
                            <div
                                className='flex items-start space-x-4'
                            >
                                <div
                                    className='p-3 rounded-full bg-primary/10'
                                >
                                    <MapPin className='h-6 w-6 text-primary'/>
                                </div>
                                <div
                                    className='w-full flex flex-col justify-center items-start'

                                >
                                    <h4 className='font-medium'> Location</h4>
                                    <a 
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        Auckland, New Zealand
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div
                            className='pt-8'
                        >
                            <h4
                                className='font-medium mb-4'
                            >
                                Conect With Me
                            </h4>
                            <div
                                className='flex space-x-4 justify-center'
                            >
                                <a href="#" target='_blank'>
                                    <Linkedin />
                                </a>
                                
                                <a href="#" target='_blank'>
                                    <Github />
                                </a>
                                
                            </div>
                        </div>

                    </div>
                    <div
                        className='bg-card p-8 rounded-lg shadow-xs' 
                        onSubmit={handleSubmit}
                    >
                        <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>
                        <form 
                            action=""
                            className='space-y-6 '
                        >
                            <label 
                                htmlFor="name"
                                className='block text-sm font-medium mb-2'
                            > 
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder='Bob Ross...' 
                                required 
                                className={cn(
                                    'w-full px-4 py-3 rounded-md border border-input bg-background ',
                                    'focus:outline-none focus:ring-2 focus:ring-primary/30'
                                )}
                            />

                            <label 
                                htmlFor="email"
                                className='block text-sm font-medium mb-2'
                            > 
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder='Bob@Ross.com...' 
                                required 
                                className={cn(
                                    'w-full px-4 py-3 rounded-md border border-input bg-background ',
                                    'focus:outline-none focus:ring-2 focus:ring-primary/30'
                                )}
                            />

                            <label 
                                htmlFor="message"
                                className='block text-sm font-medium mb-2'
                            > 
                                Your Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder='Greetings, I would like to discuss...' 
                                required 
                                className={cn(
                                    'w-full px-4 py-3 rounded-md border border-input bg-background ',
                                    'focus:outline-none focus:ring-2 focus:ring-primary/30',
                                    'resize-none'
                                )}
                            />

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={cn(
                                    'cosmic-button w-full flex items-center justify-center gap-2',
                                    ''

                                )} 
                            >   
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send />
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}
