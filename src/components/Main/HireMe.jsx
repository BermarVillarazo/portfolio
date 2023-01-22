import React, { useEffect } from 'react'

import '../../css/Main/HireMe.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const HireMe = (props) => {
    const { GMAIL } = props

    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return (
        <div className='hire odd' id='hire'>
            <div className='hire--container'>
                <h1 className='title--per--section' data-aos="zoom-in">I am also Available as a Freelance</h1>
                <button data-aos="zoom-in">
                    <a href={GMAIL} target="_blank" rel='noopener noreferrer'>Hire Me</a>
                </button>
            </div>
        </div>
    )
}

export default HireMe