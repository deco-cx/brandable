
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
  const [currentConversation, setCurrentConversation] = useState(0);
  const [stepState, setStepState] = useState<StepState>(StepState.INITIAL_MESSAGES);
  const [userSelectedTheme, setUserSelectedTheme] = useState<boolean>(false);
  const stateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isManuallyChangedRef = useRef<boolean>(false);
  const initialRenderRef = useRef<boolean>(true);
  
  // Initial messages that are the same for all brands (first 2 messages)
  const initialMessages: Message[] = [
    { id: 1, text: "Hi! Please tell me about your brand.", sender: 'bot', delay: 1000, theme: 'empty' },
  ];
  
  // Define brand-specific responses (second message from user)
  const brandResponses: Message[] = [
    { id: 101, text: "Amazonian Rainforest Eco Beauty. We make sustainable beauty products from rainforest ingredients.", sender: 'user', delay: 2000 },
    { id: 102, text: "Quantum Tech Solutions. We're a B2B SaaS company focusing on AI and cloud solutions.", sender: 'user', delay: 2000 },
    { id: 103, text: "Elegance Luxury Watches. We sell premium timepieces for affluent professionals.", sender: 'user', delay: 2000 },
    { id: 104, text: "FunTime Kids Academy. We provide educational activities for children that are playful and engaging.", sender: 'user', delay: 2000 },
    { id: 105, text: "Mono Design Studio. We specialize in minimalist graphic design and brand identity.", sender: 'user', delay: 2000 }
  ];
  
  // Brand-specific suggestions with themes applied (third message)
  const themedSuggestions: Message[] = [
    { id: 201, text: "I'm seeing forest greens and purples for your eco-friendly brand. How about this theme?", sender: 'bot', delay: 2000, theme: 'eco' },
    { id: 202, text: "For a tech company like yours, I suggest a modern look with blues and cyans. What do you think?", sender: 'bot', delay: 2000, theme: 'tech' },
    { id: 203, text: "Your luxury watch brand would look elegant with rich browns and gold accents like this.", sender: 'bot', delay: 2000, theme: 'luxury' },
    { id: 204, text: "For a children's brand, bright colors and rounded shapes would be perfect! See this theme.", sender: 'bot', delay: 2000, theme: 'playful' },
    { id: 205, text: "For your minimalist design studio, I'd recommend a clean black and white theme with subtle grays.", sender: 'bot', delay: 2000, theme: 'minimalist' }
  ];
  
  // User thank you messages (fourth message)
  const thankYouMessages: Message[] = [
    { id: 301, text: "That's perfect! The green tones really capture our eco-friendly values. Thank you!", sender: 'user', delay: 2000 },
    { id: 302, text: "Wow, that's exactly what we were looking for! The tech vibe is spot on. Thanks!", sender: 'user', delay: 2000 },
    { id: 303, text: "Absolutely beautiful! The elegant color scheme perfectly represents our luxury brand. Thank you!", sender: 'user', delay: 2000 },
    { id: 304, text: "The kids will love this! Those playful colors are exactly what we wanted. Thanks so much!", sender: 'user', delay: 2000 },
    { id: 305, text: "That minimalist approach is exactly what we were after. Clean and professional. Thank you!", sender: 'user', delay: 2000 }
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
    console.log('Clearing all timers');
    if (stateTimerRef.current) {
      clearTimeout(stateTimerRef.current);
      stateTimerRef.current = null;
    }
    
    // Clear all timeouts in the array
    timeoutsRef.current.forEach(timeout => {
      clearTimeout(timeout);
    });
    timeoutsRef.current = [];
  };

  // Start a specific conversation based on theme selection
  const startConversationForTheme = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    console.log('Starting conversation for theme:', theme);
    // Clear any existing timers
    clearAllTimers();
    
    // If theme is empty, don't do anything specific
    if (theme === 'empty') return;
    
    const conversationIndex = themeToConversationMap[theme] || 0;
    
    // Reset chat state
    setVisibleMessages([]);
    setCurrentConversation(conversationIndex);
    setStepState(StepState.INITIAL_MESSAGES);
    setUserSelectedTheme(true);
    isManuallyChangedRef.current = true;
    
    // Start with empty state (only briefly)
    onThemeChange('empty');
    
    // Begin the conversation flow for this theme
    startConversationFlow(conversationIndex, true);
  };

  // Handle the progression of the conversation for a brand
  const startConversationFlow = (conversationIndex: number, isManualSelection = false) => {
    console.log('Starting conversation flow for', conversationIndex, 'isManual:', isManualSelection);
    
    // Make sure to start with empty theme
    if (!isManualSelection) {
      onThemeChange('empty');
    }
    
    // Reset visible messages and start with initial message
    setVisibleMessages([initialMessages[0]]);
    
    // Add user response after a delay
    const timeout1 = setTimeout(() => {
      setVisibleMessages(prev => [...prev, brandResponses[conversationIndex]]);
      
      // Schedule the themed suggestion (this transitions to themed state)
      const timeout2 = setTimeout(() => {
        // Show the themed suggestion and apply the theme
        const suggestion = themedSuggestions[conversationIndex];
        setVisibleMessages(prev => [...prev, suggestion]);
        
        // Apply the brand theme
        if (suggestion.theme && suggestion.theme !== 'empty') {
          console.log('Setting theme to', suggestion.theme);
          onThemeChange(suggestion.theme);
        }
        
        setStepState(StepState.THEMED_DISPLAY);
        
        // Add thank you message after a delay
        const timeout3 = setTimeout(() => {
          setVisibleMessages(prev => [...prev, thankYouMessages[conversationIndex]]);
          
          // If auto-playing (not manually selected), set timer to move to next brand
          if (!isManuallyChangedRef.current && !userSelectedTheme) {
            stateTimerRef.current = setTimeout(() => {
              const nextConversation = (conversationIndex + 1) % brandResponses.length;
              
              // Reset state for next conversation
              setVisibleMessages([]);
              setCurrentConversation(nextConversation);
              setStepState(StepState.INITIAL_MESSAGES);
              
              // Reset to empty state before starting next conversation
              onThemeChange('empty');
              
              // Start the next conversation
              startConversationFlow(nextConversation);
            }, 5000); // Wait for 5 seconds before starting the next conversation
            timeoutsRef.current.push(stateTimerRef.current);
          }
        }, thankYouMessages[conversationIndex].delay);
        timeoutsRef.current.push(timeout3);
        
      }, brandResponses[conversationIndex].delay);
      timeoutsRef.current.push(timeout2);
    }, initialMessages[0].delay);
    timeoutsRef.current.push(timeout1);
  };

  // Watch for theme changes from parent component or URL
  useEffect(() => {
    // Skip the initial render with empty theme to avoid immediate theme change
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    
    console.log('Current theme changed to:', currentTheme);
    
    // Only respond to theme changes from outside (carousel clicks, URL params) 
    // if they're valid themes and we're not already showing that theme
    if (currentTheme !== 'empty' && 
        currentTheme !== themedSuggestions[currentConversation].theme) {
      const themeIndex = themeToConversationMap[currentTheme];
      if (themeIndex !== undefined) {
        console.log('Starting conversation based on theme change to', currentTheme);
        startConversationForTheme(currentTheme);
      }
    }
  }, [currentTheme]);

  // Initial setup - start the first conversation if no theme is selected
  useEffect(() => {
    // Begin with empty theme
    onThemeChange('empty');
    
    // Begin with the first conversation after a short delay
    const startupTimer = setTimeout(() => {
      if (!userSelectedTheme && !isManuallyChangedRef.current) {
        console.log('Starting initial demo flow');
        startConversationFlow(0);
      }
    }, 500);
    
    timeoutsRef.current.push(startupTimer);
    
    return () => {
      // Cleanup any timers on unmount
      clearAllTimers();
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl h-full min-h-[580px] overflow-y-auto flex flex-col">
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
