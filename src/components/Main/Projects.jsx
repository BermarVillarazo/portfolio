import React, { useEffect } from 'react'

import '../../css/Main/Projects.css'

import animestocks from '../../img/animestocks.webp'
import divstruct from '../../img/divstruct.webp'
import ecommerce from '../../img/ecommerce.webp'
import akirasan from '../../img/akirasan.webp'
import carentals from '../../img/carentals.webp'

const anime = "https://animestocks.tk/"
const div = "https://divstruct.tk/"
const eco = "https://samplewebsites.github.io/"
const aki = "http://akirasanenterprise.info/"
const car = "https://carentalllsss.github.io/"

import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return (
        <section className='projects odd' id='projects'>
            <h1 className='title--per--section'>Projects</h1>
            <div className='projects--compiler'>
                <a href={anime} className='animestocks' target="_blank" rel='noopener noreferrer'>
                    <div className='hover--info' data-aos="fade-right" >
                        <img src={animestocks} alt="Animestocks.tk" />
                        <div className='box'>
                            <h2>AnimeStocks</h2>
                            <div className='project--made'>
                                <h3>HTML</h3>
                                <h3>CSS</h3>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={div} className='divstruct' target="_blank" rel='noopener noreferrer'>
                    <div className='hover--info' data-aos="fade-left" >
                        <img src={divstruct} alt="Divstruct.tk" />
                        <div className='box'>
                            <h2>DivStruct</h2>
                            <div className='project--made'>
                                <h3>REACTJS</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={eco} className='akirasan' target="_blank" rel='noopener noreferrer'>
                    <div className='hover--info' data-aos="fade-left" >
                        <img src={ecommerce} alt="samplewebsites.github.io" />
                        <div className='box'>
                            <h2>Ecommerce</h2>
                            <div className='project--made'>
                                <h3>REACTJS</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={aki} className='ecommerce' target="_blank" rel='noopener noreferrer'>
                    <div className='hover--info' data-aos="fade-right" >
                        <img src={akirasan } alt="AkirasanEnterprise.info" />
                        <div className='box'>
                            <h2>AkirasanEnterprise</h2>
                            <div className='project--made'>
                                <h3>REACTJS</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href={car} className='carentals' target="_blank" rel='noopener noreferrer'>
                    <div className='hover--info' data-aos="fade-right" >
                        <img src={carentals} alt="Carentalllsss.github.io" />
                        <div className='box'>
                            <h2>Carentals</h2>
                            <div className='project--made'>
                                <h3>HTML</h3>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects