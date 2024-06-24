import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLoginFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex h-screen font-sans">
      <div className="w-7/12 flex justify-center items-center">
        <form className="flex flex-col w-9/12" onSubmit={handleLoginFormSubmit}>
          <Link
            to={'/'}
            className="mb-10 text-gray-500 hover:text-black text-sm max-w-40	"
          >
            {'< Back to WayPoints'}
          </Link>
          <label>
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-6 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <label>
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-6 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <div className="flex mb-8">
            <input type="checkbox"></input>
            <label className="text-sm">
              <span> </span>Remember me
            </label>
          </div>
          <button
            type="submit"
            className="mb-10 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300 bg-purple-300 hover:bg-purple-400 text-black"
          >
            Sign in
          </button>
          <div className="flex justify-between text-sm">
            <span>
              Don't have an account?{' '}
              <Link to={'/sign-up'} className="text-purple-400">
                Sign up
              </Link>
            </span>
            <span>
              Forgot your password?{' '}
              <Link to={'/forgot-password'} className="text-purple-400">
                Recover my password
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="w-5/12 bg-[#9b72cf]">
        <div className="p-20">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
            Welcome back to WayPoints!
          </h1>
          <p className="text-white text-lg">
            Sign in in to your account to access our platform.
          </p>
        </div>
      </div>
    </div>
  );
}
