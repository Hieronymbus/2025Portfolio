import React from 'react'
import {cn} from '@/library/utils.js'
import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer
        className={cn(
            'py-12 px-4 bg-card relative border-t border-border border mt-12 pt-8',
            'flex flex-wrap justify-between items-center'
        )}
    >
        <p
            className='text-muted-foreground text-sm '
        >
            &copy; {new Date().getFullYear()} Hieronymbus.co. All rights reserved.
        </p>
        <a
            className='p-2 rounded-full bg0primary/20 hover:bg-primary/30 text-primary transition-colors duration-300'
            href='#'
        >
            <ArrowUp size={20}/>
        </a>
    </footer>
  )
}
