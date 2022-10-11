import React, {useRef} from "react";

const FormWithRefHook = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({name, email, password});
  };

  const handleReset = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h2>FormWithRefHook</h2>
      <label>
        Name:
        <input placeholder='name' type='text' ref={nameRef} />
      </label>
      <hr />
      <label>
        Email:
        <input placeholder='email' type='email' ref={emailRef} />
      </label>
      <hr />
      <label>
        password:
        <input placeholder='password' type='password' ref={passwordRef} />
      </label>
      <button onClick={() => nameRef.current.focus()}>Focus Name Input</button>
      <button onClick={() => emailRef.current.focus()}>
        Focus Email Input
      </button>

      <button onClick={() => passwordRef.current.focus()}>
        Focus Passsword Input
      </button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FormWithRefHook;
