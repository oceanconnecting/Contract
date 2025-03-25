import React, { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import Select from "react-select";
import { useTranslations } from "next-intl";
import { styled } from '@mui/material/styles';

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface OfflineChatbotProps {
  id: number;
  question: string;
  answer: string;
  followUp: number[];
}




const customStyles = {
  control: (base: any) => ({
    ...base,
    borderRadius: "12px",
    padding: "8px 16px",
    backgroundColor: "#f9fafb", // Gris clair (bg-gray-50)
    border: "1px solid #d1d5db", // Gris moyen (border-gray-300)
    "&:hover": {
      borderColor: "#10b981", // Vert au survol (border-green-500)
    },
  }),

  menu: (base: any) => ({
    ...base,
    backgroundColor: "#ffffff", // Blanc (bg-white)
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Ombre douce
  }),

  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#e8eef1" // Vert sélectionné (bg-green-500)
      : state.isFocused
      ? "  #8ba0a4" // Vert clair au survol (bg-green-100)
      : "#ffffff", // Blanc pour les options non sélectionnées
    color: state.isSelected ? "#000000" : "#374140", // Texte blanc si sélectionné, gris foncé sinon
    padding: "12px",
    cursor: "pointer",
    borderRadius: "18px",


    "&:hover": {
      backgroundColor: "#8ba0a4", // gris clair au survol (bg-green-300)
      color: "#ffffff",
    },
  }),

  placeholder: (base: any) => ({
    ...base,
    color: "#9ca3af", // Gris clair (text-gray-400)
  }),

  singleValue: (base: any) => ({
    ...base,
    color: "#374151", // Gris foncé (text-gray-800)
  }),

  indicatorSeparator: (base: any) => ({
    ...base,
    display: "none",
  }),

  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#10b981", // Vert (text-green-500)
    "&:hover": {
      color: "#059669", // Vert plus foncé (text-green-600)
    },
  }),
};


 

const OfflineChat: React.FC = () => {
  const tt=useTranslations("homepage.chatOffline");
  const offlineChatbotData:OfflineChatbotProps[]= [
    {
      id: 1,
      question: tt("data.q1"),
      answer: tt("data.r1"),
        followUp: [2, 3, 4],
    },
    {
      id: 2,
      question:tt("data.q2"),
      answer: tt("data.r2"),
      followUp: [5, 6],
    },
    {
      id: 3,
      question: tt("data.q3"),
      answer: tt("data.r3"),
      followUp: [7, 8],
    },
    {
      id: 4,
      question: tt("data.q4"),
      answer: tt("data.r4"),
      followUp: [9],
    },
    {
      id: 6,
      question:tt("data.q6"),
      answer: tt("data.r6"),
      
      followUp: [12],
    },
    {
      id: 7,
      question: tt("data.q7"),
      answer: tt("data.r7"),
      followUp: [13, 14],
    },
    {
      id: 8,
      question: tt("data.q5"),
      answer: tt("data.r5"),
      followUp: [15],
    },
    
    
  ];

  // Mapping data to react-select options format
  const questionOptions = offlineChatbotData.map((data) => ({
    value: data.id,
    label: data.question,
  }));
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: tt("description"), sender: "bot" },
  ]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(0); // ID of the selected question
  const [isOpen, setIsOpen] = useState(false); // State to open/close the chat

  // Function to send a message
  const sendMessage = (value: any) => {
    if (selectedQuestionId === 0) return; // If no question is selected, do nothing

    const question = offlineChatbotData.find((data) => data.id === selectedQuestionId);

    if (question) {
      // User message
      const userMessage: Message = { id: messages.length + 1, text: question.question, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);

      // Bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text: question.answer, sender: "bot" },
        ]);
      }, 2000);
    }
    
  };

  return (
    <div className="fixed bottom-5  z-50 right-5">
      {/* 🔵 Button to open the chat */}
      {!isOpen && (
  <div className="relative">
    {/* Bouton principal avec effet interactif */}
    <button
      onClick={() => setIsOpen(true)}
      className="relative z-20 bg-gradient-to-r from-blue-500 to-blue-300 text-white p-4 rounded-full shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      style={{
        boxShadow: "0 6px 20px rgba(37, 99, 235, 0.5)",
      }}
    >
      <MessageSquare
        size={26}
        className="group-hover:rotate-[15deg] transition-transform duration-200"
      />
    </button>

    {/* Indicateur animé avec effet plus fluide */}
    <div className="absolute bottom-14 -right-1 z-10 flex flex-col items-center space-y-1">
      <div className="animate-bounce text-3xl text-rose-500 origin-bottom transform-gpu">👇</div>
      {/* <div className=" text-sm text-red-600 font-semibold bg-white/90 px-2 py-1 rounded-lg shadow-md animate-pulse border w-50">
        Parlez-nous !
      </div> */}

<div className="text-xs text-red-500 font-bold whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded-md shadow-sm animate-pulse">
      Parlez-nous!
    </div>
    </div>

    {/* Effet de halo dynamique */}
    <div className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-[ping_1.5s_ease-out_infinite]"></div>
  </div>
)}





  
 

    
  


      {/* 🟢 Chat window */}
      {isOpen && (
        <div className={ ` w-[460px] bg-white border shadow-lg rounded-3xl p-4 bottom-36 right-5 fixed transition-all duration-300 ${
          isOpen ? "opacity-100 visible  scale-100" : "opacity-0 invisible scale-95"  }`}>
          {/* 🔴 Close button */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">{tt("title")}</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          {/* 💬 Messages */}
          <div className="h-48 overflow-y-auto text-sm border p-2 rounded">
            {messages.map((msg) => (
              <div key={msg.id} className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-700"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* 📝 Question select dropdown */}
          <div className="mt-3 flex gap-2">

{/* Select Dropdown for Questions */}
<div className="flex-1">
  <Select
    className="w-full h-full text-sm"
    options={questionOptions}
    onChange={(selected: any) => {
      setSelectedQuestionId(selected?.value); // Update selectedQuestionId
    }}
    isSearchable
    placeholder="Sélectionner une question"
    menuPlacement="top" // Affiche les options vers le haut
    styles={customStyles} // Applique les styles personnalisés
  />
</div>

{/* Send Button */}
<div className="flex-none w-12">
  <button
    onClick={sendMessage}
    className="w-full h-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 flex items-center justify-center"
  >
    <Send size={20} />
  </button>
</div>
</div>
        </div>
      )}
    </div>
  );
};

export default OfflineChat;
