import React from 'react'

import Skills from './Skills/Skills'
import Projects from './Projects'
import About from './About'
import HireMe from './HireMe'
import Contact from './Contact'

const Main = (props) => {
    const { GMAIL } = props

    return (
        <main>
            <Skills />
            <Projects />
            <About GMAIL={GMAIL}/>
            <HireMe GMAIL={GMAIL}/>
            <Contact GMAIL={GMAIL}/>
        </main>
    )
}

export default Main