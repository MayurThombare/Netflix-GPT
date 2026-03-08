import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate.js";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidate(email.current.value, password.current.value, name.current.value);
    console.log(message);
    setErrorMessage(message);

  };

  const toggleSignin = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-3/12 absolute p-12 bg-black/80 text-white my-36 mx-auto right-0 left-0  rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign UP"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Full Name"
            className="p-4 my-4 bg-gray-800 w-full rounded-lg"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Your Email"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />
        {errorMessage &&  <p className="text-red-700 text-lg">{errorMessage}</p>}
       
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignin}>
          {isSignIn
            ? "New To Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
