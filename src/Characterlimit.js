import React, {useEffect, useState} from "react";

const Characterlimit = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = `${240 - input.length} charcters left`;
  }, [input]);

  return (
    <div>
      <h5>Characterlimit</h5>

      <textarea
        type='text'
        value={input}
        placeholder='Post'
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={input.length === 0 || input.length > 240}
        onClick={() => console.log(input)}
      >
        Post
      </button>
    </div>
  );
};

export default Characterlimit;
