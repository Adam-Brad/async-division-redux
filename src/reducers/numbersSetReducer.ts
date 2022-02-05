import {Action} from "redux";
import { generateRandomNumber } from "../helpers/generateRandomNumber";

const initialState = { numerator: 0, denominator: 0};

export const numbersSetReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT_NUMERATOR':
      return {...state, numerator: state.numerator + generateRandomNumber()};
    case 'INCREMENT_DENOMINATOR':
      return {...state, denominator: state.denominator + generateRandomNumber()};
    case 'RESET_BOTH ' :
      return { numerator: 0, denominator: 0 }
    default:
      return state;
  }
};
