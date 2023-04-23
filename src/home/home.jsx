import React, {Component} from "react";
import "./home.css";
import IdCard from "./idCard/idCard";
import ScrollDownButton from "./scrollDownButton/scrollDownButton";
import Demo from "./demo/demo";
import Property from "./property/property";
import Footer from "./footer/footer";
import animation from "../assets/background_anim.json";
import Lottie from "lottie-react-web";
import thesis from "../assets/final_report.pdf"

class Home extends Component {
    state = {
        windowSize: null,
    }

    constructor() {
        super();
        this.state.windowSize = window.innerHeight;
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({windowSize: window.innerHeight})
    }

    animStyle = {
        position: "absolute",
        bottom: 0,
        width: "auto",
        height: "auto",
        minWidth: "100%",
        minHeight: "100%",
        aspectRatio: 9/16,
        overflow: "hidden",
    }

    render() {
        return (
            <div>
                <div className={"firstSection"} style={{height: 0.925 * window.innerHeight}}>
                    <div className={"lottieContainer"}>
                    <Lottie
                        options={{
                            animationData: animation,
                            loop: true,
                        }}
                        style={this.animStyle}
                        speed={0.2}
                    />
                    </div>
                    <IdCard/>
                    <div className={"firstButtonContainer"}>
                        <ScrollDownButton scrollTo={this.state.windowSize} background={"var(--primary-text)"}
                                          arrowColor={"var(--primary-dark)"}/>
                    </div>
                </div>

                <div className={"divider"} style={{height: 0.075 * window.innerHeight}}/>

                <Demo scrollTo={2 * this.state.windowSize}/>

                <div className={"propertyBackground"}>
                        <Property scrollTo={3 * this.state.windowSize} title={"Fast"} button={true} fadeDirection={'left'}>
                            Instant verification made possible through identity certifications stored on the Ethereum
                            network. Unrivalled speed makes identity verification with <strong> Motshi </strong> ideal
                            for
                            hectic real-world
                            scenarios.
                        </Property>
                        <Property scrollTo={4 * this.state.windowSize} title={"Private"} button={true}  fadeDirection={'right'}>
                            Personal data is <strong>stored nowhere but the users’ phones</strong>. Users are left in
                            complete control of
                            their data for the first time and blockchain technology can work within the constraints of
                            the
                            GDPR.
                        </Property>
                        <Property scrollTo={5 * this.state.windowSize} title={"Secure"} button={true}  fadeDirection={'left'}>
                            Blockchain provides unrivalled security and integrity to the system, making it highly robust
                            to
                            fraud attempts. Certifications cannot be trivially issued or revoked and the database cannot
                            be
                            compromised.
                        </Property>
                        <Property title={"Reliable"}  fadeDirection={'right'}>
                            Available anywhere, anytime with just an internet connection. With decentralised data
                            storage,
                            there
                            is no single point of failure making it reachable for users at all times.
                            <br/><br/>
                            <a onClick={() => window.open(thesis, "_blank")} className={"link"}>Read the thesis.</a>
                        </Property>
                        <Footer/>
                </div>
            </div>
        )
            ;
    }
}

export default Home;