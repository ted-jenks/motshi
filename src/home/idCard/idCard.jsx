import React from "react";
import {useMeasure} from "react-use";
import "./idCard.css";
import logo from "../../assets/White_Both.png";
import image from "../../assets/ExamplePhoto.png";
import Fade from "react-reveal"

export const IdCard = () => {
    const [ref, {width}] = useMeasure();

    return (
        <Fade>
        <div className={"card"}>
            <div className={"logoContainer"}>
                <img src={logo} className={"logo"} alt={"motshi logo"}/>
            </div>
            <div className={"idContentContainer"}>
                <div className={"photoContainer"}>
                <img src={image} className={"photo"} alt={"example"}/>
                </div>
                <div className={"idText"} ref={ref} >
                    <div className={"age"} style={{fontSize: width/2}}>
                        34
                    </div>
                    <div style={{fontSize: width / 10}}>
                        Years Old
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    );

}

export default IdCard;