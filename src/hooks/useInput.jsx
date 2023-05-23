import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const reducerFunction = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialState;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(reducerFunction, initialState);

  const inputIsValid = validate(inputState.value);
  const inputIsInvalid = !inputIsValid && inputState.isTouched;

  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurhandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valid: inputIsInvalid,
    hasError: inputIsInvalid,
    inputChangeHandler,
    inputBlurhandler,
    reset,
  };
};

export default useInput;
