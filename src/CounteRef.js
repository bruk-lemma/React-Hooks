import React, {useEffect, useRef, useState} from "react";
/*
function usePersistentValue(initialValue) {
  return useState({
    current: initialValue,
  })[0];
}
*/
const CounteRef = () => {
  const [count, setCount] = useState(0);

  //const id = usePersistentValue(null);

  /** using useRef hook */

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  const resume = () => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return clear;
  }, []);

  return (
    <div>
      {count}
      <button onClick={clear}>Stop</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
};

export default CounteRef;
