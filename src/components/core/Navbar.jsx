import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    const navbarRef = useRef(0);

    useEffect(() => {
        gsap.fromTo(navbarRef.current,
            { opacity: 0, y: 0},
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#moodboard",
                    start: "top center",
                    toggleActions: "play none none reverse"
                }
            });
    }, [])
    return (
        <nav className="nav-container" ref={navbarRef}>
            <div className='nav-content'>
                <div>
                    <h1>ART DECO</h1>
                </div>
                <div>
                    <h1>Hello</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;