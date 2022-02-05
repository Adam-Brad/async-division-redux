import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";
import { isNumber } from "../helpers/isNumber";
import { generateRandomInteger } from "../helpers/generateRandomInteger";

interface AsyncDivisionProps {
    numerator: number;
    denominator: number;
    numberOfNumbersSet: number;
    randomlyIncrementNumerator: () => void;
    randomlyIncrementDenominator: () => void;
    resetBoth: () => void;
}

const AsyncDivision = ({numerator, denominator, numberOfNumbersSet, randomlyIncrementNumerator, randomlyIncrementDenominator, resetBoth}: AsyncDivisionProps) => {
    function loadSingleNumber(callback: (number: number) => void) {
        const randomInteger = generateRandomInteger();

        setTimeout(() => {
            // numberOfNumbersSet++;
            callback(randomInteger)
        }, randomInteger * 500)
    }

    const handleIncrement = () => {
        loadSingleNumber(randomlyIncrementDenominator);
        loadSingleNumber(randomlyIncrementNumerator);
    }

    const answer = numerator / denominator;
    return (
      <>
        <div>Current numerator: {numerator}</div>
        <div>Current denominator: {denominator}</div>
        <div>Current Async Division: {numberOfNumbersSet < 2 ? 'Loading' : answer} </div>
          <button onClick={handleIncrement}>Randomly increment</button>
        <button onClick={resetBoth}>Reset both</button>
      </>
    );
}


interface StoreState {
    numerator: number
    denominator: number
    numberOfNumbersSet: number
}

function mapStateToProps(state: StoreState) {
    return {
        numerator: state.numerator,
        denominator: state.denominator,
        numberOfNumbersSet: state.numberOfNumbersSet
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
