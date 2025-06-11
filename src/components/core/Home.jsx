import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

const Home = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="pageTransition-container">
                {/* <div className='glass-overlay'></div> */}
                <div className='background-banner'></div>
                <div className='text-container'>
                    <h1>ART DECO</h1>
                    {/* <span>@2025</span> */}
                </div>

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
