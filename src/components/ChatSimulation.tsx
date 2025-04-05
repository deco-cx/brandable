
import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  delay: number;
}

interface Props {
  onThemeChange: (theme: 'default' | 'eco') => void;
}

const ChatSimulation: React.FC<Props> = ({ onThemeChange }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allMessages: Message[] = [
    { id: 1, text: "What's the name of your brand?", sender: 'bot', delay: 1000 },
    { id: 2, text: "Amazonian Rainforest Eco Beauty", sender: 'user', delay: 2000 },
    { id: 3, text: "Great. Got a website I can look at?", sender: 'bot', delay: 2500 },
    { id: 4, text: "rainforestbeauty.co", sender: 'user', delay: 3000 },
    { id: 5, text: "Love it. I'm seeing forest greens and purples — shall I mock a theme?", sender: 'bot', delay: 3500 },
    { id: 6, text: "Yes, that would be perfect!", sender: 'user', delay: 4000 }
  ];

  useEffect(() => {
    if (currentIndex >= allMessages.length) return;

    const timer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, allMessages[currentIndex]]);
      setCurrentIndex(prev => prev + 1);

      // Trigger theme change when we're at the 4th message
      if (currentIndex === 3) {
        setTimeout(() => {
          onThemeChange('eco');
        }, 1000);
      }
    }, allMessages[currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex, onThemeChange]);

  useEffect(() => {
    // Reset the chat simulation after all messages are displayed
    if (visibleMessages.length === allMessages.length) {
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
        onThemeChange('default');
      }, 8000);

      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages.length, allMessages.length, onThemeChange]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full h-[350px] overflow-y-auto flex flex-col">
      <div className="text-sm font-medium text-gray-500 mb-4 flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
        Brandable is interviewing you
      </div>
      
      <div className="flex-1 space-y-4">
        {visibleMessages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <div className="text-xs text-gray-400 mt-4 text-center">
        Watch as the page theme updates based on your brand
      </div>
    </div>
  );
};

export default ChatSimulation;
