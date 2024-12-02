import React, { useState } from "react";

const SignUpComponent = ({ onBackToSignIn }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    const requestData = {
      Firstname: name,
      Lastname: lastName,
      email: email,
      password: password,
      numero: phone,
    };

    try {
      const response = await fetch("https://ocean-contra.vercel.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("La création du compte a échoué. Veuillez réessayer.");
      }

      const data = await response.json();
      console.log("Compte créé :", data);

      setMessage("Compte créé avec succès !");
      
      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPassword("");
      
      setTimeout(() => setMessage(null), 3000);

      setTimeout(() => onBackToSignIn(), 1500);
    } catch (error) {
      console.log("Error:", error);
      setMessage("Erreur lors de la création du compte. Veuillez réessayer.");
    }
  };

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="mx-auto max-w-xs">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            placeholder="Votre Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="text"
            placeholder="Votre Prénom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="tel"
            placeholder="Votre Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}" // Adjust pattern for your required format
            title="Veuillez entrer un numéro de téléphone valide (10 chiffres)."
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="email"
            placeholder="Votre Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Votre Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-5 tracking-wide font-bold bg-gradient-to-r from-blue-600 to-red-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Créer un compte
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes("succès") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
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
