
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

// Define the states for our carousel steps
enum StepState {
  INITIAL_MESSAGES = 'initial_messages', // Initial empty state with first messages (30% of step time)
  THEMED_DISPLAY = 'themed_display',     // Themed state with suggestion message (70% of step time)
}

const ChatSimulation: React.FC<Props> = ({ onThemeChange, currentTheme }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [stepState, setStepState] = useState<StepState>(StepState.INITIAL_MESSAGES);
  const [userSelectedTheme, setUserSelectedTheme] = useState<boolean>(false);
  const stateTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initial messages that are the same for all brands (first 2 messages)
  const initialMessages: Message[] = [
    { id: 1, text: "Hi! Please tell me about your brand.", sender: 'bot', delay: 1000, theme: 'empty' },
  ];
  
  // Define brand-specific responses (second message from user)
  const brandResponses: Message[] = [
    { id: 2, text: "Amazonian Rainforest Eco Beauty. We make sustainable beauty products from rainforest ingredients.", sender: 'user', delay: 2000 },
    { id: 2, text: "Quantum Tech Solutions. We're a B2B SaaS company focusing on AI and cloud solutions.", sender: 'user', delay: 2000 },
    { id: 2, text: "Elegance Luxury Watches. We sell premium timepieces for affluent professionals.", sender: 'user', delay: 2000 },
    { id: 2, text: "FunTime Kids Academy. We provide educational activities for children that are playful and engaging.", sender: 'user', delay: 2000 },
    { id: 2, text: "Mono Design Studio. We specialize in minimalist graphic design and brand identity.", sender: 'user', delay: 2000 }
  ];
  
  // Brand-specific suggestions with themes applied (third message)
  const themedSuggestions: Message[] = [
    { id: 3, text: "I'm seeing forest greens and purples for your eco-friendly brand. How about this theme?", sender: 'bot', delay: 2000, theme: 'eco' },
    { id: 3, text: "For a tech company like yours, I suggest a modern look with blues and cyans. What do you think?", sender: 'bot', delay: 2000, theme: 'tech' },
    { id: 3, text: "Your luxury watch brand would look elegant with rich browns and gold accents like this.", sender: 'bot', delay: 2000, theme: 'luxury' },
    { id: 3, text: "For a children's brand, bright colors and rounded shapes would be perfect! See this theme.", sender: 'bot', delay: 2000, theme: 'playful' },
    { id: 3, text: "For your minimalist design studio, I'd recommend a clean black and white theme with subtle grays.", sender: 'bot', delay: 2000, theme: 'minimalist' }
  ];
  
  // User thank you messages (fourth message)
  const thankYouMessages: Message[] = [
    { id: 4, text: "That's perfect! The green tones really capture our eco-friendly values. Thank you!", sender: 'user', delay: 2000 },
    { id: 4, text: "Wow, that's exactly what we were looking for! The tech vibe is spot on. Thanks!", sender: 'user', delay: 2000 },
    { id: 4, text: "Absolutely beautiful! The elegant color scheme perfectly represents our luxury brand. Thank you!", sender: 'user', delay: 2000 },
    { id: 4, text: "The kids will love this! Those playful colors are exactly what we wanted. Thanks so much!", sender: 'user', delay: 2000 },
    { id: 4, text: "That minimalist approach is exactly what we were after. Clean and professional. Thank you!", sender: 'user', delay: 2000 }
  ];

  // Map theme names to conversation indexes
  const themeToConversationMap: Record<string, number> = {
    'empty': 0,
    'eco': 0,
    'tech': 1,
    'luxury': 2,
    'playful': 3,
    'minimalist': 4
  };

  // Clear all timers
  const clearAllTimers = () => {
    if (stateTimerRef.current) {
      clearTimeout(stateTimerRef.current);
      stateTimerRef.current = null;
    }
  };

  // Start a specific conversation based on theme selection
  const startConversationForTheme = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    // Clear any existing timers
    clearAllTimers();
    
    // If theme is empty, don't do anything specific
    if (theme === 'empty') return;
    
    const conversationIndex = themeToConversationMap[theme] || 0;
    
    // Reset chat state
    setVisibleMessages([]);
    setCurrentIndex(0);
    setCurrentConversation(conversationIndex);
    setStepState(StepState.INITIAL_MESSAGES);
    setUserSelectedTheme(true);
    
    // Start with empty state
    onThemeChange('empty');
    
    // Begin the conversation flow for this theme
    startConversationFlow(conversationIndex);
  };

  // Handle the progression of the conversation for a brand
  const startConversationFlow = (conversationIndex: number) => {
    // Total duration of the entire cycle
    const totalDuration = 15000; // 15 seconds
    
    // Initial messages phase (30% of total time)
    const initialPhaseTime = totalDuration * 0.3;
    
    // Make sure to start with empty theme
    onThemeChange('empty');
    
    // Reset visible messages and start with initial message
    setVisibleMessages([initialMessages[0]]);
    
    // Add user response after a delay
    setTimeout(() => {
      setVisibleMessages(prev => [...prev, brandResponses[conversationIndex]]);
      
      // Schedule the themed suggestion (this transitions to themed state)
      setTimeout(() => {
        // Show the themed suggestion and apply the theme
        const suggestion = themedSuggestions[conversationIndex];
        setVisibleMessages(prev => [...prev, suggestion]);
        
        // Apply the brand theme
        if (suggestion.theme && suggestion.theme !== 'empty') {
          onThemeChange(suggestion.theme);
        }
        
        setStepState(StepState.THEMED_DISPLAY);
        
        // Add thank you message after a delay
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, thankYouMessages[conversationIndex]]);
          
          // If user hasn't manually selected a theme, set timer to move to next brand
          if (!userSelectedTheme) {
            stateTimerRef.current = setTimeout(() => {
              const nextConversation = (conversationIndex + 1) % brandResponses.length;
              
              // Reset state for next conversation
              setVisibleMessages([]);
              setCurrentConversation(nextConversation);
              setStepState(StepState.INITIAL_MESSAGES);
              
              // Reset to empty state
              onThemeChange('empty');
              
              // Start the next conversation
              startConversationFlow(nextConversation);
            }, totalDuration * 0.5); // Reduce time after thank you message
          }
        }, 2000); // Delay for thank you message
        
      }, brandResponses[conversationIndex].delay);
    }, initialMessages[0].delay);
  };

  // Watch for theme changes from parent component or URL
  useEffect(() => {
    // Only respond to theme changes from outside (carousel clicks, URL params) 
    // if they're valid themes and we're not already showing that theme
    if (currentTheme !== 'empty' && 
        currentTheme !== ['eco', 'tech', 'luxury', 'playful', 'minimalist'][currentConversation]) {
      const themeIndex = themeToConversationMap[currentTheme];
      if (themeIndex !== undefined) {
        startConversationForTheme(currentTheme);
      }
    }
  }, [currentTheme]);

  // Initial setup - start the first conversation if no theme is selected
  useEffect(() => {
    if (currentTheme === 'empty' && !userSelectedTheme) {
      // Begin with the first conversation
      startConversationFlow(0);
    }
    
    return () => {
      // Cleanup any timers on unmount
      clearAllTimers();
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl h-[500px] overflow-y-auto flex flex-col">
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
