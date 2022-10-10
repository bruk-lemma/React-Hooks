import React from "react";
import {useState, useEffect} from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((err) => console.log(`Error ${err}`));
  }, [url]);
  return {data};
};

export default useFetchData;
