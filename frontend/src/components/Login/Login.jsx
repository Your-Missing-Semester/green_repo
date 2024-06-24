import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex h-screen font-sans">
      <div className="w-7/12 flex justify-center items-center">
        <form
          className="flex flex-col w-9/12"
          onSubmit={handleLoginFormSubmit}
        ></form>
      </div>
    </div>
  );
}
