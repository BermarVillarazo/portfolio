import React from 'react'

import '../../css/Main/Contact.css'

import { BsFillArrowUpCircleFill } from 'react-icons/Bs';

import { BsFacebook } from 'react-icons/Bs';
import { SiGmail } from 'react-icons/Si';
import { BsGithub } from 'react-icons/Bs';
import { SiFiverr } from 'react-icons/Si';
import { BsLinkedin } from 'react-icons/Bs';

const Contact = (props) => {
    const { GMAIL } = props

    return (
        <div className='contact' id='contact'>
            <div className='contact--compiler'>
                <div className='scrollup'>
                    <a href='#'>
                        <BsFillArrowUpCircleFill />
                    </a>
                </div>
            </div>
            <h3>The Final Tweek</h3>
            <ContactMe GMAIL={GMAIL}/>
            <div className='copyright'>
                <h4>Copyright ⓒ 2023 <a href="#">Bermar Villarazo Jr.</a></h4>
            </div>
        </div>
    )
}

const FB = "https://www.facebook.com/bermar09/"
const GITHUB = "https://github.com/BermarVillarazo"
const FIVERR = "https://www.fiverr.com/bermarvillarazo/do-front-end-web-developer-for-affordable-price"
const LINKEDIN = "https://www.linkedin.com/in/bermar-villarazo-99b915245/"

const ContactMe = (props) => {
    const { GMAIL } = props

    return (
        <div className='contact--container'>
            <div className='social--compiler'>
                <div className='social--side'>
                    <h1>Get in touch</h1>
                    <button className='gmail--btn'>
                        <a href={GMAIL} target="_blank" rel='noopener noreferrer'>villarazobermar@gmail.com</a>
                    </button>
                </div>
                <div className='social--side center'>
                    <h3 className='center'>You can also find me at</h3>
                    <div className='social--link'>
                        <a href={FB} target="_blank" rel='noopener noreferrer'>
                            <BsFacebook />
                        </a>
                        <a href={GMAIL} target="_blank" rel='noopener noreferrer'>
                            <SiGmail />
                        </a>
                        <a href={GITHUB} target="_blank" rel='noopener noreferrer'>
                            <BsGithub />
                        </a>
                        <a href={FIVERR} target="_blank" rel='noopener noreferrer'>
                            <SiFiverr />
                        </a>
                        <a href={LINKEDIN} target="_blank" rel='noopener noreferrer'>
                            <BsLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact