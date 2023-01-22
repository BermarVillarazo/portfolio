import React, { useState } from 'react'

import CodingSkills from './CodingSkills'
import MyService from './MyService'

import '../../../css/Main/Skills.css'

const Skills = () => {
    const [isShown, setIsShown] = useState(false)

    return (
        <section className='skills even' id='skills'>
            <h1 className='title--per--section'>Skills</h1>
            <div className='skills--compiler'>
                <div className='skills--info'>
                    <h2 id='code' onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>Coding Skills</h2>
                    {isShown && <div id='shown'>Try to hover ↓</div>}
                    <CodingSkills />
                </div>
                <div className='skills--info'>
                    <h2>My Service</h2>
                    <MyService />
                </div>
            </div>
        </section>
    )
}

export default Skills