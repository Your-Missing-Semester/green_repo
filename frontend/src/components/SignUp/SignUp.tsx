import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const getPasswordValidationErrorIfExists = (
    password: string
  ): string | null => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(password)) {
      return 'Password must have a minimum length of 8 characters and also contain an uppercase letter, lowercase letter, number, and special character';
    }
    return null;
  };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const error = getPasswordValidationErrorIfExists(password);
    setPasswordError(error);
  };

  return (
    <div className="flex h-screen font-sans">
      <div className="w-7/12 flex justify-center items-center">
        <form className="flex flex-col w-9/12" onSubmit={handleLoginFormSubmit}>
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
          />
          <label>
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <label>
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="mb-4 text-gray-500 text-sm">
            A minimum of 8 characters must be used, with 1 uppercase, 1
            lowercase, 1 number, and 1 special character.
          </p>
          <button
            type="submit"
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300 bg-purple-300 hover:bg-purple-400 text-black"
          >
            Create account
          </button>
          <div className="flex justify-center">
            <span>Already have an account?</span>
            <span> </span>
            <Link to={'/login'} className="text-purple-400">
              Login
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
};

export default SignUp;
