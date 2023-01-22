import React, { useEffect } from 'react'

import '../../css/Main/About.css'

import gradpic from '../../img/gradpic.webp'

const RESUME = "https://drive.google.com/file/d/1xqpZ4D4MirtJn_ur9hI-QRoEUp11Sy-b/view?usp=share_link"

import AOS from 'aos'
import 'aos/dist/aos.css'

const About = (props) => {
    const { GMAIL } = props

    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return (
        <div className='about even' id='about'>
            <h1 className='title--per--section'>About</h1>
            <div className="about--compiler">
                <img src={gradpic} alt="" data-aos="fade-down" />
                <div className="about--self">
                    <h2 data-aos="fade-down">Hello I am Bermar Villarazo Jr. I am a self-taught Front End Web Developer from Cebu, Philippines. I am a currently studying Computer Science at Cebu Institute of Technology University.</h2>
                    <h2 data-aos="fade-down">I really love to code because it makes me curious on how really things works. I prefer learning and challenge myself to do some interesting things that I haven't done yet.</h2>
                    <h2 data-aos="fade-down">I am interested in job opportunities that allow me to use my skills, gain new knowledge, and advance in my career. If you have a position available that aligns with my experience and abilities, please feel free to reach out to me.</h2>
                    <div className='about--btn'>
                        <button data-aos="fade-down" >
                            <a href={GMAIL} target="_blank" rel='noopener noreferrer'>Hire Me</a>
                        </button>
                        <button className='resume' data-aos="fade-down" >
                            <a href={RESUME} target="_blank" rel='noopener noreferrer'>Resume</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About