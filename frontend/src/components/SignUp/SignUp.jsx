import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  const validatePassword = (password) => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(password)) {
      return 'Password must have a minimum length of 8 characters and also contain an uppercase letter, lowercase letter, number, and special character';
    }
    return null;
  };

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSignUpFormSubmit(e) {
    e.preventDefault();

    const error = validatePassword(password);
    setPasswordError(error);
  }

  return (
    <div className="flex h-screen font-sans">
      <div className="w-7/12 flex justify-center items-center">
        <form
          className="flex flex-col w-9/12"
          onSubmit={handleSignUpFormSubmit}
        >
          <Link
            to={'/'}
            className="mb-10 text-gray-500 hover:text-black text-sm max-w-40	"
          >
            {'< Back to WayPoints'}
          </Link>
          {passwordError && (
            <p className="mb-4 rounded-md p-4 bg-red-200 text-sm">
              {passwordError}
            </p>
          )}
          <label>
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          ></input>
          <label>
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          ></input>
          <label>
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <label>
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <p className="mb-8 text-gray-500 text-sm">
            A minimum of 8 characters must be used, with 1 uppercase, 1
            lowercase, 1 number, and 1 special character.
          </p>
          <button
            type="submit"
            className="mb-10 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300 bg-purple-300 hover:bg-purple-400 text-black"
          >
            Create account
          </button>
          <div className="flex justify-center">
            <span>Already have an account?</span>
            <span> </span>
            <Link to={'/sign-in'} className="text-purple-400">
              Sign in
            </Link>
          </div>
        </form>
      </div>
      <div className="w-5/12 bg-[#9b72cf]">
        <div className="p-20">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
            Combining structured career path visualization with professional
            networking capabilities.
          </h1>
          <p className="text-white text-lg">
            Create your account and discover your possible career paths!
          </p>
        </div>
      </div>
    </div>
  );
}
