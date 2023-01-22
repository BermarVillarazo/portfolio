import React, { useState, useEffect } from 'react'

import Intro from './Intro'

import '../css/Navbar.css'

import { CgMenuGridO } from 'react-icons/Cg';
import { CgMenuGridR } from 'react-icons/Cg';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setNavbar(true);
            } else {
                setNavbar(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const { GMAIL } = props

    return (
        <header>
            <nav className={navbar ? 'navbar--fixed' : ''}>
                <h1 className='logo'>Bermar</h1>
                <div className={isOpen ? 'content show' : 'content'}>
                    <li className='active'><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
                <div className='nav--btn' onClick={() => setIsOpen(!isOpen)}>
                    <button>{isOpen ? <CgMenuGridO /> : <CgMenuGridR />}</button>
                </div>
            </nav>
            {navbar}

            <Intro GMAIL={GMAIL} />
        </header>
    )
}

export default Navbar