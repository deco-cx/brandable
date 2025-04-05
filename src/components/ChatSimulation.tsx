import React, { useEffect, useState, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  delay: number;
  theme?: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}

interface Props {
  onThemeChange: (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => void;
  currentTheme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}

enum StepState {
  INITIAL_MESSAGES = 'initial_messages',
  THEMED_DISPLAY = 'themed_display',
}

const ChatSimulation: React.FC<Props> = ({ onThemeChange, currentTheme }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [stepState, setStepState] = useState<StepState>(StepState.INITIAL_MESSAGES);
  const [userSelectedTheme, setUserSelectedTheme] = useState<boolean>(false);
  const stateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isManuallyChangedRef = useRef<boolean>(false);
  const initialRenderRef = useRef<boolean>(true);

  const initialMessages: Message[] = [
    { id: 1, text: "Hi! Please tell me about your brand.", sender: 'bot', delay: 1000, theme: 'empty' },
  ];

  const brandResponses: Message[] = [
    { id: 101, text: "Amazonian Rainforest Eco Beauty. We make sustainable beauty products from rainforest ingredients.", sender: 'user', delay: 2000 },
    { id: 102, text: "Quantum Tech Solutions. We're a B2B SaaS company focusing on AI and cloud solutions.", sender: 'user', delay: 2000 },
    { id: 103, text: "Elegance Luxury Watches. We sell premium timepieces for affluent professionals.", sender: 'user', delay: 2000 },
    { id: 104, text: "FunTime Kids Academy. We provide educational activities for children that are playful and engaging.", sender: 'user', delay: 2000 },
    { id: 105, text: "Mono Design Studio. We specialize in minimalist graphic design and brand identity.", sender: 'user', delay: 2000 }
  ];

  const themedSuggestions: Message[] = [
    { id: 201, text: "I'm seeing forest greens and purples for your eco-friendly brand. How about this theme?", sender: 'bot', delay: 2000, theme: 'eco' },
    { id: 202, text: "For a tech company like yours, I suggest a modern look with blues and cyans. What do you think?", sender: 'bot', delay: 2000, theme: 'tech' },
    { id: 203, text: "Your luxury watch brand would look elegant with rich browns and gold accents like this.", sender: 'bot', delay: 2000, theme: 'luxury' },
    { id: 204, text: "For a children's brand, bright colors and rounded shapes would be perfect! See this theme.", sender: 'bot', delay: 2000, theme: 'playful' },
    { id: 205, text: "For your minimalist design studio, I'd recommend a clean black and white theme with subtle grays.", sender: 'bot', delay: 2000, theme: 'minimalist' }
  ];

  const thankYouMessages: Message[] = [
    { id: 301, text: "That's perfect! The green tones really capture our eco-friendly values. Thank you!", sender: 'user', delay: 2000 },
    { id: 302, text: "Wow, that's exactly what we were looking for! The tech vibe is spot on. Thanks!", sender: 'user', delay: 2000 },
    { id: 303, text: "Absolutely beautiful! The elegant color scheme perfectly represents our luxury brand. Thank you!", sender: 'user', delay: 2000 },
    { id: 304, text: "The kids will love this! Those playful colors are exactly what we wanted. Thanks so much!", sender: 'user', delay: 2000 },
    { id: 305, text: "That minimalist approach is exactly what we were after. Clean and professional. Thank you!", sender: 'user', delay: 2000 }
  ];

  const themeToConversationMap: Record<string, number> = {
    'empty': 0,
    'eco': 0,
    'tech': 1,
    'luxury': 2,
    'playful': 3,
    'minimalist': 4
  };

  const clearAllTimers = () => {
    console.log('Clearing all timers');
    if (stateTimerRef.current) {
      clearTimeout(stateTimerRef.current);
      stateTimerRef.current = null;
    }
    
    timeoutsRef.current.forEach(timeout => {
      clearTimeout(timeout);
    });
    timeoutsRef.current = [];
  };

  const startConversationForTheme = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    console.log('Starting conversation for theme:', theme);
    clearAllTimers();
    
    if (theme === 'empty') return;
    
    const conversationIndex = themeToConversationMap[theme] || 0;
    
    setVisibleMessages([]);
    setCurrentConversation(conversationIndex);
    setStepState(StepState.INITIAL_MESSAGES);
    setUserSelectedTheme(true);
    isManuallyChangedRef.current = true;
    
    onThemeChange('empty');
    
    startConversationFlow(conversationIndex, true);
  };

  const startConversationFlow = (conversationIndex: number, isManualSelection = false) => {
    console.log('Starting conversation flow for', conversationIndex, 'isManual:', isManualSelection);
    
    if (!isManualSelection) {
      onThemeChange('empty');
    }
    
    setVisibleMessages([initialMessages[0]]);
    
    const timeout1 = setTimeout(() => {
      setVisibleMessages(prev => [...prev, brandResponses[conversationIndex]]);
      
      const timeout2 = setTimeout(() => {
        const suggestion = themedSuggestions[conversationIndex];
        setVisibleMessages(prev => [...prev, suggestion]);
        
        if (suggestion.theme && suggestion.theme !== 'empty') {
          console.log('Setting theme to', suggestion.theme);
          onThemeChange(suggestion.theme);
        }
        
        setStepState(StepState.THEMED_DISPLAY);
        
        const timeout3 = setTimeout(() => {
          setVisibleMessages(prev => [...prev, thankYouMessages[conversationIndex]]);
          
          if (!isManuallyChangedRef.current && !userSelectedTheme) {
            stateTimerRef.current = setTimeout(() => {
              const nextConversation = (conversationIndex + 1) % brandResponses.length;
              
              setVisibleMessages([]);
              setCurrentConversation(nextConversation);
              setStepState(StepState.INITIAL_MESSAGES);
              
              onThemeChange('empty');
              
              startConversationFlow(nextConversation);
            }, 5000);
            timeoutsRef.current.push(stateTimerRef.current);
          }
        }, thankYouMessages[conversationIndex].delay);
        timeoutsRef.current.push(timeout3);
      }, brandResponses[conversationIndex].delay);
      timeoutsRef.current.push(timeout2);
    }, initialMessages[0].delay);
    timeoutsRef.current.push(timeout1);
  };

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    
    console.log('Current theme changed to:', currentTheme);
    
    if (currentTheme !== 'empty' && 
        currentTheme !== themedSuggestions[currentConversation].theme) {
      const themeIndex = themeToConversationMap[currentTheme];
      if (themeIndex !== undefined) {
        console.log('Starting conversation based on theme change to', currentTheme);
        startConversationForTheme(currentTheme);
      }
    }
  }, [currentTheme]);

  useEffect(() => {
    onThemeChange('empty');
    
    const startupTimer = setTimeout(() => {
      if (!userSelectedTheme && !isManuallyChangedRef.current) {
        console.log('Starting initial demo flow');
        startConversationFlow(0);
      }
    }, 500);
    
    timeoutsRef.current.push(startupTimer);
    
    return () => {
      clearAllTimers();
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl h-[531px] overflow-y-auto flex flex-col">
      <div className="text-sm font-bold text-gray-500 mb-4 flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
        Brandable is interviewing you
      </div>
      
      <div className="flex-1 space-y-4">
        {visibleMessages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'} animate-fade-in`}
          >
            <span className="font-medium">{message.text}</span>
          </div>
        ))}
      </div>
      
      <div className="text-xs font-semibold text-gray-400 mt-4 text-center">
        Click a brand style to see it come to life
      </div>
    </div>
  );
};

export default ChatSimulation;
