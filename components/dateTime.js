import React from "react";

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => this.setState({ date: new Date() }), 10000);
    }

    render() {
        const { state } = this;
        const date = state.date.toLocaleDateString("en-GB");
        const time = state.date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

        return <div className="date-time">
            <p>{date}</p>
            <p>{time}</p>
        </div>;
    }
}

export default DateTime;
