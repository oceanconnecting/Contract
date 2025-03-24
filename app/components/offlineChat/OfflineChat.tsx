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
}const customStyles = {
  // Contrôle de la zone de sélection
  control: (base: any) => ({
    ...base,
    borderRadius: '12px', // Bords arrondis
    padding: '8px 16px', // Espacement intérieur
    backgroundColor: 'bg-gray-50', // Couleur de fond
    borderColor: 'border-gray-300', // Couleur de bordure
    '&:hover': {
      borderColor: 'border-green-500', // Bordure verte au survol
    },
  }),

  // Menu déroulant
  menu: (base: any) => ({
    ...base,
    backgroundColor: 'bg-white', // Fond blanc pour le menu
    borderRadius: '8px', // Bords arrondis
    boxShadow: 'shadow-lg', // Ombre portée pour le menu
    
  }),

  // Options du menu
  // option: (base: any, state: any) => ({
  //   ...base,
  //   backgroundColor: state.isSelected
  //     ? 'bg-green-500' // Fond vert quand sélectionné
  //     : state.isFocused
  //     ? 'bg-gray-200' // Fond gris clair au survol
  //     : 'bg-white', // Fond blanc pour les options non sélectionnées
  //   color: state.isSelected ?'text-white' : 'text-gray-800', // Texte blanc si sélectionné
  //   padding: '12px', // Espacement des options
  //   cursor: 'pointer', // Curseur en main
  //   '&:hover': {
  //     backgroundColor: 'bg-green-500', // Couleur au survol des options
  //     color: 'text-white', // Texte en blanc au survol
  //   },
  // }),

  // Options du menu
  option: (base: any, state: any) => ({
    ...base,
    rounded: '20px',
    backgroundColor: state.isSelected
      ? '#d5dbdb' // Fond vert quand sélectionné
      : state.isFocused
      ? '#e5e7eb' // Fond gris clair au survol
      : '#ffffff', // Fond blanc pour les options non sélectionnées
    color: state.isSelected ? '#ffffff' : '#333333', // Texte blanc si sélectionné
    padding: '12px', // Espacement des options
    cursor: 'pointer', // Curseur en main
    '&:hover': {
      backgroundColor: '#ccd5ae', // Couleur au survol des options
      color: '#ffffff', // Texte en blanc au survol
    },
  }),




  
  // Texte du placeholder
  placeholder: (base: any) => ({
    ...base,
    color: 'text-gray-400', // Couleur du placeholder (gris clair)
  }),

  // Valeur sélectionnée
  singleValue: (base: any) => ({
    ...base,
    color: 'text-gray-800', // Couleur du texte sélectionné
  }),

  // Flèche pour ouvrir le menu
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none', // Supprime la séparation entre la flèche et le texte
  }),

  // Flèche
  dropdownIndicator: (base: any) => ({
    ...base,
    color: 'text-green-500', // Couleur de la flèche
    '&:hover': {
      color: 'text-green-600', // Couleur de la flèche au survol
    },
  }),
};
const customStyles1 = {

  // Contrôle de la zone de sélection
  control: (base: any) => ({
    ...base,
    borderRadius: '12px', // Bords arrondis
    padding: '8px 16px', // Espacement intérieur
    backgroundColor: 'bg-gray-50', // Couleur de fond Tailwind (gris clair)
    borderColor: 'border-gray-300', // Couleur de bordure (gris)
    '&:hover': {
      borderColor: 'border-green-500', // Bordure verte au survol
    },
  }),

  // Menu déroulant
  menu: (base: any) => ({
    ...base,
    backgroundColor: 'bg-white', // Fond blanc pour le menu
    borderRadius: '8px', // Bords arrondis
    boxShadow: 'shadow-lg', // Ombre portée pour le menu
  }),

  // Options du menu
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? 'bg-green-500' // Fond vert quand sélectionné
      : state.isFocused
      ? 'bg-gray-200' // Fond gris clair au survol
      : 'bg-white', // Fond blanc pour les options non sélectionnées
    color: state.isSelected ? 'text-white' : 'text-gray-800', // Texte blanc si sélectionné, sinon gris foncé
    padding: '12px', // Espacement des options
    cursor: 'pointer', // Curseur en main
    '&:hover': {
      backgroundColor: 'bg-green-500', // Couleur au survol des options
      color: 'text-white', // Texte en blanc au survol
    },
  }),

  // Texte du placeholder
  placeholder: (base: any) => ({
    ...base,
    color: 'text-gray-400', // Couleur du placeholder (gris clair)
  }),

  // Valeur sélectionnée
  singleValue: (base: any) => ({
    ...base,
    color: 'text-gray-800', // Couleur du texte sélectionné (gris foncé)
  }),

  // Flèche pour ouvrir le menu
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none', // Supprime la séparation entre la flèche et le texte
  }),

  // Flèche
  dropdownIndicator: (base: any) => ({
    ...base,
    color: 'text-green-500', // Couleur de la flèche (vert)
    '&:hover': {
      color: 'text-green-600', // Couleur de la flèche au survol (vert plus foncé)
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
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <MessageSquare size={24} />
        </button>
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
          <div className="mt-3 flex">

               {/* Select Dropdown for Questions */}
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





 

            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded-xl  hover:bg-blue-600"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineChat;
