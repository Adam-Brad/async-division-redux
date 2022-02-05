import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";

interface CounterProps {
    numerator: number;
    denominator: number
    randomlyIncrementNumerator: () => void;
    randomlyIncrementDenominator: () => void;
    resetBoth: () => void;
}

const Counter = (props: CounterProps) => (
  <div>
    <div>Current numerator: {props.numerator}</div>
      <div>Current denominator: {props.denominator}</div>

      <button onClick={props.randomlyIncrementNumerator}>Increment Numerator</button>
      <button onClick={props.randomlyIncrementDenominator}>Increment Demoninator</button>
      <button onClick={props.resetBoth}>Reset both</button>
  </div>
);

interface StoreState {
    numerator: number
    denominator: number
}

function mapStateToProps(state: StoreState) {
    return {
        numerator: state.numerator,
        denominator: state.denominator
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        randomlyIncrementNumerator: () => dispatch({
            type: 'INCREMENT_NUMERATOR'
        }),
        randomlyIncrementDenominator: () => dispatch({
            type: 'INCREMENT_DENOMINATOR'
        }),
        resetBoth: () => dispatch(({
            type: 'RESET_BOTH'
        }))
    };
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
