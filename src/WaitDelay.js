import React, {useEffect, useState} from "react";

const WaitDelay = ({delay = 1000, placeholder, ui}) => {
  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true);
    }, delay);
    return () => window.clearTimeout(id);
  }, [delay]);

  const [show, setShow] = useState(false);

  return show === true ? ui : placeholder;
};

export default WaitDelay;
