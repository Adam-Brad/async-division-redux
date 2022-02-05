import {Action} from "redux";
import { generateRandomInteger } from "../helpers/generateRandomInteger";

const initialState = { numerator: 0, denominator: 0, numberOfNumbersSet: 0};

export const numbersSetReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT_NUMERATOR':
      return {...state, numerator: state.numerator + generateRandomInteger(), numberOfNumbersSet: state.numberOfNumbersSet + 1};
    case 'INCREMENT_DENOMINATOR':
      return {...state, denominator: state.denominator + generateRandomInteger(), numberOfNumbersSet: state.numberOfNumbersSet + 1};
    case 'RESET_BOTH' :
      return initialState;
    default:
      return state;
  }
};
