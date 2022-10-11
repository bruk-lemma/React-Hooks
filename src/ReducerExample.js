import React, {useReducer, useState} from "react";

function Slider({onChange, min, max}) {
  const [value, setValue] = useState(1);

  return (
    <div>
      {value}
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value);
          setValue(value);
        }}
      />
    </div>
  );
}

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      count: state.count + state.step,
      step: state.step,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - state.step,
      step: state.step,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
      step: state.step,
    };
  } else if (action.type === "updateStep") {
    return {
      count: state.count,
      step: action.step,
    };
  } else {
    throw new Error();
  }
}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, step: 1});
  return (
    <React.Fragment>
      <h3>ReducerExample</h3>
      <Slider
        min={1}
        max={10}
        onChange={(value) =>
          dispatch({
            type: "updateStep",
            step: value,
          })
        }
      />
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>
        {" "}
        <strong>+</strong>
      </button>

      <button onClick={() => dispatch({type: "decrement"})}>
        {" "}
        <strong>-</strong>
      </button>

      <button onClick={() => dispatch({type: "reset"})}>
        {" "}
        <strong>Reset</strong>
      </button>
    </React.Fragment>
  );
};

export default ReducerExample;
