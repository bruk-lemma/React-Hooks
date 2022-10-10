import React, {useEffect, useState} from "react";

function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [width, height]);

  return {width, height};
}

const Windowresize = () => {
  const {width, height} = useWindowDimensions();
  return (
    <div>
      <h3>Windowresize</h3>
      <h2>width:{width}</h2>
      <h2>height:{height}</h2>
      <p>Resize the window</p>
    </div>
  );
};

export default Windowresize;
