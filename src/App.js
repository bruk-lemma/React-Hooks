import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect, useContext} from "react";
import useFetchData from "./useFetchData.js";
import React from "react";
import Todos from "./todos.js";
import Characterlimit from "./Characterlimit.js";
import WaitDelay from "./WaitDelay.js";
import FetchPost from "./FetchPost.js";
/*
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(4);
  const {data} = useFetchData("https://api.github.com/users");

  useEffect(() => {
    console.log(`you have clicked the button ${count} times`);
  }, [count]);
  useEffect(() => {
    console.log(`you have clicked the second-button ${count2} times`);
  }, []);

  return (
    <div className='App'>
      <button onClick={() => setCount(count + 1)}>Click me +`{count}`</button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click count 2 +`{count2}`
      </button>
      {data &&
        data.map((user) => (
          <div className='text-white' key={user.id}>
            <h2> {user.login}</h2>
            <p>{user.type}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
*/

/*** the Normal use of ContextApi */

const NumberContext = React.createContext();

function App() {
  return (
    <NumberContext.Provider value={67}>
      <div>
        <WaitDelay
          delay={3000}
          placeholder={<p>Waiting ...</p>}
          ui={<p>This text should appear after 3 seconds</p>}
        />

        <FetchPost />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {(value) => <div>The Answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}

/** now lets rewrite the Dispaly component using useContext hook; */

function Dispalyc() {
  const valuec = useContext(NumberContext);
  return (
    <div>
      <h4>display value with useContext() hook</h4>
      {<h5>the number is {valuec}</h5>}
    </div>
  );
}

export default App;
