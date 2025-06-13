import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// import background4 from '../../assets/video/background4.mp4'
import background4 from '../../assets/video/background4.mp4'
import Footer from './Footer';
import Collaborate from './Collaborate';
import About from './About';
const Home = () => {

    useEffect(() => {
        const tl = gsap.timeline();
        // tl.fromTo('.background-banner', {
        //     y: 0,
        //     x: 0,
        //     opacity: 1,
        //     duration: 2
        // }, {
        //     y: '-100%',
        //     x: "-100%",
        //     duration: 2
        // })
        tl.fromTo('.text-container', {
            y: 0,
            opacity: 1,
            duration: 2
        }, {
            y: 100,
            opacity: 1,
            duration: 2
        }, "<")
        tl.to('.background-banner', {
            opacity: 0,
            ease: 'power1.out'
        })
        tl.to('.text-container', {
            // y: 0,
            x: 0,
            opacity: 0,
            ease: 'power1.out'
        })


    }, [])

    return (
        <main>
            {/* <div className="pageTransition-container">
                <div className='background-banner'></div>
                <div className='text-container hide'>
                    <h1>ART DECO</h1>
                </div>
            </div> */}
            <section className='home-container' id='home'>
                <div className='home-overlay'></div>
                <video src={background4} autoPlay muted loop playsInline></video>
                <div className='home-content-container'>
                    <div className='home-content'>
                        <h1>Abhishek Vermaan</h1>
                    </div>
                    <div className='home-info'>
                        <span>Direction In Motion</span><br />
                        <span>Visual storytelling. Emotional Geometry. </span>
                    </div>
                </div>
            </section>
            <section id='moodboard'></section>
            {/* <section id=''></section> */}
            <section id='style'></section>
            <section id='about'>
                <About />
            </section>
            {/* <section id='frames'></section> */}
            <section id='collaborate'>
                <Collaborate />
            </section>
            <section id='footer'>
                <Footer />
            </section>
        </main>
    );
};

export default Home;
