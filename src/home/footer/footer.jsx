import React, {Component} from "react";
import "./footer.css";
import reactNative from "../../assets/React.png";
import solidity from "../../assets/Solidity.png";
import eth from "../../assets/EthTwo.png";

class Footer extends Component {
    render() {
        return (
            <div className={"footerContainer"}>
            <div className={"technologies"}>
                <img src={reactNative} className={"reactLogo"} alt={"react native logo"}/>
                <img src={solidity} className={"solidityLogo"} alt={"solidity logo"}/>
                <img src={eth} className={"ethLogo"} alt={"ethereum logo"}/>
            </div>
                <div className={"blurb"}>
                    <div className={"blurbTitle"}>
                        Created By Ted Jenks
                    </div>
                    <div className={"blurbCont"}>
                        Why not take a look at my other projects on my
                        <a href={"https://www.tedjenks.com"} className={"link"}>
                            {" "}website
                    </a>?
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;