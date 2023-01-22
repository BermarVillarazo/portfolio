import React from 'react'

import '../css/Intro.css'

import gradpic from '../img/gradpic.webp'

const Intro = (props) => {
    const { GMAIL } = props

    return (
        <div className='intro'>
            <div className='intro--info'>
                <h2>Hello,</h2>
                <h1>I am Bermar Villarazo Jr.</h1>
                <h2>I am a self-taught Front End Web Developer</h2>
                <button>
                    <a href={GMAIL} target="_blank" rel='noopener noreferrer'>Hire Me</a>
                </button>
            </div>
            <div className='intro--img'>
                <img src={gradpic} alt="" />
            </div>
        </div>
    )
}

export default Intro