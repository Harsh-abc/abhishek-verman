import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import backgroundVideo from '../../assets/video/background.mp4';
import img1 from '../../assets/asset 2.png'
import img2 from '../../assets/asset 3.jpeg'
import img3 from '../../assets/asset 4.jpeg'
import img4 from '../../assets/asset 5.jpeg'
import img5 from '../../assets/asset 6.jpeg'
import video1 from '../../assets/video/background.mp4'
import video2 from '../../assets/video/background2.mp4'
import video3 from '../../assets/video/background3.mp4'
const Home = () => {
    const counterRef = useRef(0);
    const [displayCounter, setDisplayCounter] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const toggleRecording = () => {
        setIsRecording(!isRecording);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };


    useEffect(() => {
        const updateCounter = () => {
            let interval = setInterval(() => {
                let increment = Math.floor(Math.random() * 10) + 1;
                counterRef.current = Math.min(counterRef.current + increment, 100);
                setDisplayCounter(counterRef.current);

                if (counterRef.current >= 100) {
                    clearInterval(interval);
                    runGSAPAnimations(); //GSAP ANIMATION COUNTER 100 HONE KE BAAD RUN HOGA
                }
            }, 180);
        };

        const runGSAPAnimations = () => {
            const tl = gsap.timeline();

            // Block animations
            tl.fromTo(".block",
                { x: 0 },
                {
                    x: "-600%",
                    duration: 3,
                    ease: "power3.in",
                    // opacity: 0,
                    // scale: 0.2
                }, "<"
            )
                .fromTo(".block2",
                    { x: 0 },
                    {
                        x: "900%",
                        duration: 3,
                        ease: "power3.in",
                        // opacity: 0,
                        // scale: 0.2
                    }, "<"
                )

                .fromTo(".image-container",
                    {
                        y: "0%",
                        // X: "0%",
                        opacity: 0,
                        scrub: 3
                    },
                    {
                        // y: "-95.2%",
                        y: "-100%",
                        // X: "0%",
                        opacity: 1,
                        duration: 8,
                        ease: "power3.out",
                        scrub: 3,
                        stagger: true,
                    }, "text"
                )
                .fromTo(".image-container .lastImg",
                    {
                        // position: "absolute",
                        width: "500px",
                        height: "600px",
                        top: "0",
                        left: "0",
                        opacity: 1,
                    },
                    {
                        width: "100vw",
                        height: "100vh",
                        top: "0",
                        left: "0",
                        duration: 1,
                        ease: "power3.inOut",
                    }
                )
            // .to(".pageTransition-container", {
            //     autoAlpha: 0,
            //     duration: 1,
            //     delay: 6.5
            // }, "text");


            tl.fromTo(".home-container",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5, // optional delay after video expands
                    ease: "power2.inOut"
                }
            );
            // Home content animations
            // tl.fromTo(".home-content h1",
            //     { opacity: 0, y: 0 },
            //     { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
            // );

            // tl.fromTo(".home-details span",
            //     { opacity: 0, y: 30 },
            //     {
            //         opacity: 1,
            //         y: 0,
            //         duration: 0.8,
            //         stagger: 0.2,
            //         ease: "power3.out"
            //     },
            //     "-=0.6"
            // );
        };

        updateCounter();
    }, []);

    return (
        <>
            <div className="pageTransition-container">
                <div className='glass-overlay'></div>
                <div className="overlay">
                    <div className="block block-1">[ Motion in Direction ]</div>
                    <div className="block2 block-2">[ {displayCounter} percent ]</div>
                </div>
                <div className='text-container'>ART DECO</div>
                {/* <div className='image-container'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <video
                        className="lastImg"
                        src={video1}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <video
                        className="lastImg"
                        src={video2}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <video
                        className="lastImg"
                        src={video3}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div> */}

                <div className='home-container'>
                    <div className='home-content'>
                        <h1>Abhishek Vermaan</h1>
                        <span>Direction In Motion</span>
                        <span>Visual storytelling. Emotional Geometry. </span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
