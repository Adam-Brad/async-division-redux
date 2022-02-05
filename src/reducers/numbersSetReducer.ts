import {Action} from "redux";
import { generateRandomInteger } from "../helpers/generateRandomInteger";

interface StoreState {
  numerator: number | null;
  denominator: number | null;
}

const initialState: StoreState = { numerator: null, denominator: null};

export const numbersSetReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT_NUMERATOR':
      if(state.numerator === null) {
        return {...state, numerator: generateRandomInteger()};
      }

      return {...state, numerator: state.numerator + generateRandomInteger()};
    case 'INCREMENT_DENOMINATOR':
      if(state.denominator === null) {
        return {...state, denominator: generateRandomInteger()};
      }

      return {...state, denominator: state.denominator + generateRandomInteger()};
    case 'RESET_BOTH' :
      return initialState;
    default:
      return state;
  }
};
