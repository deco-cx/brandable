
import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  delay: number;
  theme?: 'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist';
}

interface Props {
  onThemeChange: (theme: 'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist') => void;
}

const ChatSimulation: React.FC<Props> = ({ onThemeChange }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentConversation, setCurrentConversation] = useState(0);

  // Define all conversation sequences
  const conversations: Message[][] = [
    // Eco conversation
    [
      { id: 1, text: "What's the name of your brand?", sender: 'bot', delay: 1000 },
      { id: 2, text: "Amazonian Rainforest Eco Beauty", sender: 'user', delay: 2000 },
      { id: 3, text: "Great. Got a website I can look at?", sender: 'bot', delay: 2000 },
      { id: 4, text: "rainforestbeauty.co", sender: 'user', delay: 2000 },
      { id: 5, text: "Love it. I'm seeing forest greens and purples — shall I mock a theme?", sender: 'bot', delay: 2000, theme: 'eco' },
      { id: 6, text: "Yes, that would be perfect!", sender: 'user', delay: 2000 }
    ],
    // Tech conversation
    [
      { id: 1, text: "What's the name of your brand?", sender: 'bot', delay: 1000 },
      { id: 2, text: "Quantum Tech Solutions", sender: 'user', delay: 2000 },
      { id: 3, text: "Can you tell me about your industry?", sender: 'bot', delay: 2000 },
      { id: 4, text: "We're a B2B SaaS company focusing on AI and cloud solutions", sender: 'user', delay: 2000 },
      { id: 5, text: "I see a modern tech feel with blues and cyans. How does this look?", sender: 'bot', delay: 2000, theme: 'tech' },
      { id: 6, text: "That's exactly what we want!", sender: 'user', delay: 2000 }
    ],
    // Luxury conversation
    [
      { id: 1, text: "Tell me about your company", sender: 'bot', delay: 1000 },
      { id: 2, text: "Elegance Luxury Watches - we sell premium timepieces", sender: 'user', delay: 2000 },
      { id: 3, text: "What's your target demographic?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Affluent professionals who appreciate craftsmanship", sender: 'user', delay: 2000 },
      { id: 5, text: "I'm thinking rich browns and gold accents for a luxury feel", sender: 'bot', delay: 2000, theme: 'luxury' },
      { id: 6, text: "Perfect, very sophisticated", sender: 'user', delay: 2000 }
    ],
    // Playful conversation
    [
      { id: 1, text: "Hi! What's your brand about?", sender: 'bot', delay: 1000 },
      { id: 2, text: "FunTime Kids Academy - educational activities for children", sender: 'user', delay: 2000 },
      { id: 3, text: "How would you describe your brand personality?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Playful, colorful, energetic, and fun!", sender: 'user', delay: 2000 },
      { id: 5, text: "How about bright colors and rounded shapes like this?", sender: 'bot', delay: 2000, theme: 'playful' },
      { id: 6, text: "The kids will love it!", sender: 'user', delay: 2000 }
    ],
    // Minimalist conversation
    [
      { id: 1, text: "What's your brand name?", sender: 'bot', delay: 1000 },
      { id: 2, text: "Mono Design Studio", sender: 'user', delay: 2000 },
      { id: 3, text: "What services do you offer?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Minimalist graphic design and brand identity", sender: 'user', delay: 2000 },
      { id: 5, text: "Clean, black and white with subtle grays would suit your aesthetic", sender: 'bot', delay: 2000, theme: 'minimalist' },
      { id: 6, text: "It's perfectly aligned with our philosophy", sender: 'user', delay: 2000 }
    ]
  ];

  useEffect(() => {
    if (currentIndex >= conversations[currentConversation].length) return;

    const timer = setTimeout(() => {
      const message = conversations[currentConversation][currentIndex];
      setVisibleMessages(prev => [...prev, message]);
      setCurrentIndex(prev => prev + 1);

      // Apply theme change when a message with a theme property is displayed
      if (message.theme) {
        onThemeChange(message.theme);
      }
    }, conversations[currentConversation][currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex, currentConversation, onThemeChange]);

  useEffect(() => {
    // Reset the chat simulation after all messages in current conversation are displayed
    if (visibleMessages.length === conversations[currentConversation].length) {
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
        // Move to next conversation, or back to first if we've gone through all
        setCurrentConversation((prev) => (prev + 1) % conversations.length);
        // Reset to default theme between conversations
        onThemeChange('default');
      }, 5000);

      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages.length, currentConversation, onThemeChange]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl h-[400px] overflow-y-auto flex flex-col">
      <div className="text-sm font-bold text-gray-500 mb-4 flex items-center">
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
            <span className="font-medium">{message.text}</span>
          </div>
        ))}
      </div>
      
      <div className="text-xs font-semibold text-gray-400 mt-4 text-center">
        Watch as the page theme updates based on your brand
      </div>
    </div>
  );
};

export default ChatSimulation;
