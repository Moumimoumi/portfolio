import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'



export default function Header(){
    const [toggleMenu,setToggleMneu] = useState(false);


    return <header className="flex justify-between px-5 bg-primary">
        <a className="font-bold text-black" href="#">Moumi</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>


        {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=> setToggleMneu(!toggleMenu)}  className="flex flex-col text-white mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}

        <button onClick={() => setToggleMneu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
}