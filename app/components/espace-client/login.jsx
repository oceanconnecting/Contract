"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SignUpComponent from "./SignUpComponent";
import logo from "../../../public/assets/logo/ocean1.svg"
import { useTranslations } from "next-intl";
const SignInComponent = () => {
  const t=useTranslations("espaceClient.connecter")
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [clientInfo, setClientInfo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleView = () => {
    setIsSignIn((prev) => !prev);
  };
  const SearchParamsComponent = () => {
    const searchParams = useSearchParams();
    const contraId = searchParams.get("contraId");
    return contraId;
  };

  const contraId = (
    <Suspense fallback={null}>
      <SearchParamsComponent />
    </Suspense>
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://ocean-contra.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        throw new Error("Courriel ou mot de passe invalide");
      }

      const data = await response.json();
      setMessage("Connexion réussie !");

      // Set the token in a cookie
      document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;

      setClientInfo({ userId: data.user.id });

      if (data.user && data.user.id) {
        router.push(`/profile/${data.user.id}`);
      } else {
        throw new Error("L'identifiant du client n'a pas été trouvé.");
      }
    } catch (error) {
      console.log("Erreur de connexion :", error);
      setMessage(
        "Échec de la connexion. Veuillez vérifier votre e-mail ou votre mot de passe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
<div 
  className="absolute opacity-50 inset-0 flex items-center justify-center"
  style={{
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fcontrat%2Flogin.jpg?alt=media&token=6ffd1357-0328-4ed5-8633-9e761e9af4a7')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // opacity: 0.5 // 70% d'opacité (ajustable)
  }}
>
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 shadow rounded-xl flex justify-center z-10 flex-1">
        
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div>
            <Image
              src={logo}
              alt="Sign In"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>
          {isSignIn ? (
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-4">
                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder={t("form.email")}
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <div className="relative w-full mt-5">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type={showPassword ? "text" : "password"}
                        placeholder={t("form.password")}
                        // value={password}
                        // type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        // onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                      {loginData.password && (
                        <span
                          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      )}
                    </div>
                    {message && (
                      <div
                        className={`mb-4 ${
                          message.includes("réussie")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {message}
                      </div>
                    )}

                    {/* {clientInfo && (
                      <div className="mb-4 text-gray-700">
                        <p>Client ID: {clientInfo.clientId}</p>
                        <p>Dossier ID: {clientInfo.dossierId}</p>
                      </div>
                    )} */}
                    <button
                      className="mt-5 tracking-wide font-bold bg-gradient-to-r from-blue-600 to-red-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                      disabled={isLoading}
                    >
                      
                      {isLoading ? t("form.connect") :  t("form.thisConnect") }
                      {/* <span className="ml-3">Se connecter</span> */}
                    </button>
                    <p className="mt-6 text-xs text-gray-700 text-center">
                      {t("form.compte")}
                      <button
                        onClick={handleToggleView}
                        className="border-b ml-2 font-bold border-dotted"
                      >
                       {t("form.createCompte")}
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <SignUpComponent onBackToSignIn={handleToggleView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
