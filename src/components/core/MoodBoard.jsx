import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../../assets/asset 2.png";

gsap.registerPlugin(ScrollTrigger);



const MoodBoard = () => {
    

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
