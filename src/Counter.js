import React from "react";
import { connect, } from "react-redux";
import { increment, decrement, reset } from './actions';

class Counter extends React.Component {

    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.dispatch(decrement() );
    };

    reset = () => {
        this.props.dispatch(reset() );
    };

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">
                        {this.props.count}
                    </span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = {
    increment, decrement, reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);