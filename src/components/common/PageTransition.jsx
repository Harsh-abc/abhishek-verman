import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import backgroundVideo from '../../assets/video/background.mp4';
const PageTransition = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Block KO UPPR MOVE HONE KE LIYE
        tl.fromTo(".block",
            { y: 0 },
            {
                y: "-150%",
                duration: 0.8,
                ease: "power3.inOut",
                opacity: 0,
            }
        )

            // BLOCK2 KO DOWN MOVE KARNE
            .fromTo(".block2",
                { y: 0 },
                {
                    y: "150%",
                    duration: 0.8,
                    ease: "power3.inOut",
                    opacity: 0,
                }, "<" // DONO ANIMATION EK SAATH RUN HOGA
            )

            .to(".block-mid", {
                opacity: 1,
                scale: 1.2,
                duration: 2,
                delay:0.2
            })
            .to(".block-mid", {
                opacity: 0,
                width: "100%",
                height: "100vh"
            }, "test")

            .to(".pageTransition-container", {
                autoAlpha: 0, //CONTAINER KO GAYAB KR DEGA
                duration: 0.3,
                delay: 0.3
            }, "test");

    }, []);

    return (
        <div className="pageTransition-container">
            <div className="overlay">
                <div className="block block-1">Abhishek</div>
                <div className='block-mid block-1'>
                    <video src={backgroundVideo} />
                </div>
                <div className="block2 block-2">Vermaan</div>
            </div>

        </div>
    );
};

export default PageTransition;
