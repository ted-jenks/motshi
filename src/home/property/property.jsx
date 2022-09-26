import React, {Component} from "react";
import "./property.css";
import ScrollDownButton from "../scrollDownButton/scrollDownButton";
import Fade from "react-reveal"

class Property extends Component {
    render() {
        return (
            <div className={"propertyContainer"}>
                <Fade left={this.props.fadeDirection === 'left'} right={!(this.props.fadeDirection === 'left')}>
                    <div className={"propertyContentContainer"}>
                        <div className={"propertyTitle"}>
                            <strong>
                                {this.props.title}
                            </strong>
                        </div>
                        <div className={"propertyText"}>
                            {this.props.children}
                        </div>
                    </div>
                </Fade>
                {this.props.button &&
                    <div className={"propertyButtonContainer"}>
                        <ScrollDownButton scrollTo={this.props.scrollTo} background={"rgba(0,0,0,0)"}
                                          arrowColor={"var(--primary-medium)"}/>
                    </div>}
            </div>
        );
    }
}

export default Property;