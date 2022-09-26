import React, {Component} from "react";
import "./scrollDownButton.css";

class ScrollDownButton extends Component {
    state = {
        show: true,
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({show: window.scrollY < this.props.scrollTo - (0.8 * window.innerHeight)})
    };

    render() {
        return (
            <div className={this.state.show ? "button" : "button hidden"}
                 style={{backgroundColor: this.props.background}} onClick={() => window.scrollTo({
                top: this.props.scrollTo,
                behavior: 'smooth',
            })}>
                <i className={"arrow"} style={{borderColor: this.props.arrowColor}}/>
            </div>
        );
    }
}

export default ScrollDownButton;