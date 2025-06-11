import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../../assets/asset 2.png";

gsap.registerPlugin(ScrollTrigger);

const imageCount = 20;
const imageList = Array.from({ length: imageCount }, () => image);


const MoodBoard = () => {
    const gridRef = useRef(null);


    useEffect(() => {
        // GSAP Animation setup for type2
        const grid = gridRef.current;
        const gridWrap = grid.querySelector(".grid-wrap");
        const gridItems = grid.querySelectorAll(".grid__item");
        const gridItemsInner = [...gridItems].map((item) =>
            item.querySelector(".grid__item-inner")
        );

        // Set CSS variables for type2 animation
        grid.style.setProperty("--grid-width", "100%");
        grid.style.setProperty("--perspective", "5000px");
        grid.style.setProperty("--grid-inner-scale", "0.2");
        grid.style.setProperty("--grid-item-ratio", "0.9");
        grid.style.setProperty("--grid-columns", "500");
        grid.style.setProperty("--grid-gap", "100px");

        const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: gridWrap,
                start: "top bottom+=5%",
                end: "bottom top-=5%",
                scrub: true,
                // markers: true
            },
        });

        timeline
            .set(gridWrap, {
                rotationX: 20,
            })
            .set(gridItems, {
                // z: () => gsap.utils.random(-3, -1),
            })
            .fromTo(
                gridItems,
                {
                    // yPercent: () => gsap.utils.random(100, 1000),
                    rotationY: -45,
                    filter: "brightness(300%)",
                },
                {
                    ease: "power2",
                    yPercent: () => gsap.utils.random(-1000, -100),
                    rotationY: 45,
                    filter: "brightness(0%)",
                },

            )
            .fromTo(
                gridWrap,
                {
                    rotationZ: -5,
                },
                {
                    rotationX: -20,
                    rotationZ: 10,
                    scale: 1.2,
                },
                0
            )
            .fromTo(
                gridItemsInner,
                {
                    scale: 2,
                },
                {
                    scale: 0.5,
                },
                0
            );

        // Cleanup function on unmount
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            timeline.kill();
            // lenisRef.current.destroy();
        };
    }, []);

    return (
        <div className="moodboard-container">
            <div className="grid grid--2" ref={gridRef}>
                <div className="grid-wrap">
                    {imageList.map((imgUrl, index) => (
                        <div className="grid__item" key={index}>
                            <div
                                className="grid__item-inner"
                                style={{ backgroundImage: `url(${imgUrl})` }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <h3 className="content__title">
                Impermanence <br />
                guides life's river.
            </h3>
        </div>
    );
};

export default MoodBoard;
