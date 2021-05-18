import react, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    Increment = () => {
        console.log(this);
        this.setState({ count: this.state.count + 1 });
    };
    Decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    render() {
        return (
            <div>
                <button onClick={this.Increment}>+</button>
                <p>{this.state.count}</p>
                <button onClick={this.Decrement}>-</button>
            </div>
        );
    }
}
export default Counter;
