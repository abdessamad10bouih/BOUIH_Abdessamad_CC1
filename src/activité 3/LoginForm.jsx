import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];
  const errors = {
    uname: "Votre identifiant est incorrect.",
    upass: "Votre mot de passe est incorrect.",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass } = document.forms[0];
    setName(uname.value);
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== upass.value) {
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
        window.location.href = "/welcome";
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) => {
    if (name == errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>;
    }
  };
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Inscription</h1>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identifiant">
              L'identifiant
            </label>
            <input
              type="text"
              name="uname"
              id="identifiant"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Entrez votre identifiant"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {renderErrorMessage("uname") && <p className="text-red-500 text-xs italic mt-1">{renderErrorMessage("uname")}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="upass"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Entrez votre mot de passe"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {renderErrorMessage("upass") && <p className="text-red-500 text-xs italic mt-1">{renderErrorMessage("upass")}</p>}
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
