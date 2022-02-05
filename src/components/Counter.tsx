import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";
import { generateRandomInteger } from "../helpers/generateRandomInteger";

interface AsyncDivisionProps {
    numerator: number;
    denominator: number;
    randomlyIncrementNumerator: () => void;
    randomlyIncrementDenominator: () => void;
    resetBoth: () => void;
}

const AsyncDivision = ({numerator, denominator, randomlyIncrementNumerator, randomlyIncrementDenominator, resetBoth}: AsyncDivisionProps) => {
    function loadSingleNumber(callback: (number: number) => void, extraDelay: number) {
        const randomInteger = generateRandomInteger();

        setTimeout(() => {
            callback(randomInteger)
        }, (randomInteger + extraDelay) * 500)
    }

    const handleIncrement = () => {
        loadSingleNumber(randomlyIncrementDenominator, 0);
        loadSingleNumber(randomlyIncrementNumerator, 3);
    }

    let numberDisplay: string | number = 'loading';

    if (numerator !== null && denominator !== null) {
        numberDisplay = numerator / denominator;
    }

    return (
      <>
        <div>Current numerator: {numerator}</div>
        <div>Current denominator: {denominator}</div>
        <div>Current Async Division: {numberDisplay} </div>
        <button onClick={handleIncrement}>Randomly increment</button>
        <button onClick={resetBoth}>Reset both</button>
      </>
    );
}

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
)(AsyncDivision);
