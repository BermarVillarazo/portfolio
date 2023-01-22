import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const CodingSkills = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return (
        <div data-aos="fade-up">
            <div className='html'>
                <h3>HTML</h3>
                <button></button>
            </div>
            <div className='html css'>
                <h3>CSS</h3>
                <button></button>
            </div>
            <div className='html javascript'>
                <h3>JAVASCRIPT</h3>
                <button></button>
            </div>
            <div className='html reactjs'>
                <h3>REACTJS</h3>
                <button></button>
            </div>
            <div className='html scss'>
                <h3>SCSS</h3>
                <button></button>
            </div>
            <div className='html jquery'>
                <h3>JQUERY</h3>
                <button></button>
            </div>
            <div className='html bootstrap'>
                <h3>BOOTSTRAP</h3>
                <button></button>
            </div>
        </div>
    )
}

export default CodingSkills