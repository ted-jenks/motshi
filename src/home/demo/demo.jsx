import React, {useEffect, useState} from "react";
import "./demo.css";
import {useMeasure} from "react-use";
import Typewriter from 'typewriter-effect';
import ScrollDownButton from "../scrollDownButton/scrollDownButton";
import PhoneCutout from "../../assets/PhoneCutout.png"
import Fade from "react-reveal";
import DemoVid from "../../assets/demo.mp4";
import VideoLooper from "react-video-looper";

export const Phone = () => {
    const [ref, {width}] = useMeasure();
    const [when, setWhen] = useState(false);
    const [demo, setDemo] = useState(true);

    const handleScroll = (event) => {
        console.log("scroll", window.scrollY, "o", window.innerHeight)
        if ((window.scrollY + 70) > window.innerHeight && (window.scrollY + 200) < 2 * window.innerHeight) {
            setTimeout(() =>
                    setWhen(true)
                , 1500);
            setDemo(false);
            setDemo(true);
        }

        if ((window.scrollY) > 5 && (window.scrollY - 50) < 2 * window.innerHeight) {
            setDemo(true);
        } else {
            setDemo(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (

        <Fade right={true} when={when} duration={800}>
            <div className={"demoPhoneContainer"}>
                <div className={"vidContainer"}
                     style={{width: width - (width * 0.06), backgroundColor: demo ? "rgba(0,0,0,0)" : "grey"}}>
                    <VideoLooper source={DemoVid} autoPlay={demo} start={0} end={42} width={"100%"} height={"100%"}/>
                </div>
                <img src={PhoneCutout} ref={ref} alt={"cutout of phone"} className={"phoneCutout"}/>
            </div>
        </Fade>);
}

export const Demo = (props) => {
    const [ref, {width}] = useMeasure();

    return (<div className={"demoBackdrop"}>
        <div className={"demoContent"}>
            <div className={"demoText"} ref={ref}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50).typeString('<span style="font-size: 7vw;">Digital ID</span><br/><span style="font-size: 3vw; max-font-size: 38px;">on blockchain</span>')
                            .callFunction(() => {
                                console.log('String typed out change!' + width);
                            })
                        window.addEventListener('scroll', (event) => {
                            if ((window.scrollY + 70) > window.innerHeight) {
                                typewriter.start();
                            }
                        });
                    }}
                />
            </div>
            <Phone/>
        </div>
        <div style={{marginBottom: '2vh'}}>
            <ScrollDownButton scrollTo={props.scrollTo} background={'rgba(0,0,0,0)'}
                              arrowColor={"var(--contrast)"}/>
        </div>
    </div>);
}

export default Demo;