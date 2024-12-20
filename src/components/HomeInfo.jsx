import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div style={{ width: '30%' }} >

        <div className='info-box'>
            <p className='font-medium text-center' style={{ width: '100%' }}>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Muneeb</span>👋
            <br />
            A Software Engineer from Pakistan
        </h1>
    ),
    2: (
        <InfoBox text="About Myself" link="/about" btnText="Learn more" />
    ),
    3: (
        <InfoBox text="My Projects" link="/projects" btnText="Visit my portfolio" />
    ),
    4: (
        <InfoBox text="Need work done?" link="/contact" btnText="Let's talk" />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return (
        renderContent[currentStage] || null
    )
}

export default HomeInfo