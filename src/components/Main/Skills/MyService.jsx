import React, { useEffect } from 'react'

import responsive from '../../../img/responsive.webp'
import webDevelopment from '../../../img/webDevelopment.webp'
import webDesign from '../../../img/webDesign.webp'

import AOS from 'aos'
import 'aos/dist/aos.css'

const MyService = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return (
        <div className='myservice--compiler'>
            <div className='responsive' data-aos="fade-up">
                <img src={responsive} alt="" />
                <h2>Responsive</h2>
                <h3>My portfolio is designed to be fully responsive, showcasing my work in an optimal way on any device or screen size. From desktop computers to smartphones, my portfolio's layout and functionality adapts seamlessly, providing an easy and enjoyable browsing experience. My commitment to responsive design ensures that all visitors to my portfolio will have access to my work, regardless of the device they use to view it.</h3>
            </div>
            <div className='responsive' data-aos="fade-up">
                <img src={webDevelopment} alt="" />
                <h2>Web Development</h2>
                <h3>My web development services focus on creating fast, efficient and visually engaging websites that are tailored to my clients' specific needs. My expertise in web development technologies allows me to create visually appealing, user-friendly websites. Whether you're looking for a simple brochure website or a complex web application, I have the skills and experience to deliver a high-quality, successful project.</h3>
            </div>
            <div className='responsive' data-aos="fade-up">
                <img src={webDesign} alt="" />
                <h2>Web Design</h2>
                <h3>My approach to web design involves a combination of research, conceptualization, and creative execution to deliver websites that are not just beautiful, but also functional and user-friendly. Whether it's crafting a unique design for a new website or redesigning an existing one, I have the skills and experience to create visually engaging designs that meet my clients' needs and exceed their expectations.</h3>
            </div>
        </div>
    )
}

export default MyService