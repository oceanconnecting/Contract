// SignUpComponent.js
import React, { useState } from "react";

const SignUpComponent = ({ onBackToSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="Text"
          placeholder="Votre Nom"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="Text"
          placeholder="Votre Prénom"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="email"
          placeholder="Votre Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          placeholder="Votre Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-5 tracking-wide font-bold bg-gradient-to-r from-blue-600 to-red-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          Créer un compte
        </button>
        <p className="mt-6 text-xs text-gray-700 text-center">
          Vous avez déjà un compte?
          <button
            className="border-b ml-2 font-bold border-dotted"
            onClick={onBackToSignIn}
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpComponent;
