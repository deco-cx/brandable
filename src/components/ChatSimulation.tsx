
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
  WAITING_FOR_INPUT = 'waiting_for_input', // Initial empty state with first messages
  BRANDED = 'branded',                     // Branded state with theme applied
  TRANSITIONING = 'transitioning'          // Transition between states
}

const ChatSimulation: React.FC<Props> = ({ onThemeChange, currentTheme }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [stepState, setStepState] = useState<StepState>(StepState.WAITING_FOR_INPUT);
  const [userSelectedTheme, setUserSelectedTheme] = useState<boolean>(false);
  const stateTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Define all conversation sequences - initial messages for each brand
  const initialConversations: Message[][] = [
    // Eco conversation - initial messages
    [
      { id: 1, text: "What's the name of your brand?", sender: 'bot', delay: 1000, theme: 'empty' },
      { id: 2, text: "Amazonian Rainforest Eco Beauty", sender: 'user', delay: 2000 },
      { id: 3, text: "Great. Got a website I can look at?", sender: 'bot', delay: 2000 },
      { id: 4, text: "rainforestbeauty.co", sender: 'user', delay: 2000 }
    ],
    // Tech conversation - initial messages
    [
      { id: 1, text: "What's the name of your brand?", sender: 'bot', delay: 1000, theme: 'empty' },
      { id: 2, text: "Quantum Tech Solutions", sender: 'user', delay: 2000 },
      { id: 3, text: "Can you tell me about your industry?", sender: 'bot', delay: 2000 },
      { id: 4, text: "We're a B2B SaaS company focusing on AI and cloud solutions", sender: 'user', delay: 2000 }
    ],
    // Luxury conversation - initial messages
    [
      { id: 1, text: "Tell me about your company", sender: 'bot', delay: 1000, theme: 'empty' },
      { id: 2, text: "Elegance Luxury Watches - we sell premium timepieces", sender: 'user', delay: 2000 },
      { id: 3, text: "What's your target demographic?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Affluent professionals who appreciate craftsmanship", sender: 'user', delay: 2000 }
    ],
    // Playful conversation - initial messages
    [
      { id: 1, text: "Hi! What's your brand about?", sender: 'bot', delay: 1000, theme: 'empty' },
      { id: 2, text: "FunTime Kids Academy - educational activities for children", sender: 'user', delay: 2000 },
      { id: 3, text: "How would you describe your brand personality?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Playful, colorful, energetic, and fun!", sender: 'user', delay: 2000 }
    ],
    // Minimalist conversation - initial messages
    [
      { id: 1, text: "What's your brand name?", sender: 'bot', delay: 1000, theme: 'empty' },
      { id: 2, text: "Mono Design Studio", sender: 'user', delay: 2000 },
      { id: 3, text: "What services do you offer?", sender: 'bot', delay: 2000 },
      { id: 4, text: "Minimalist graphic design and brand identity", sender: 'user', delay: 2000 }
    ]
  ];
  
  // Messages that appear after initial conversation with the theme applied
  const brandedMessages: Message[][] = [
    // Eco branded message
    [
      { id: 5, text: "Love it. I'm seeing forest greens and purples — shall I mock a theme?", sender: 'bot', delay: 2000, theme: 'eco' },
      { id: 6, text: "Yes, that would be perfect!", sender: 'user', delay: 2000 }
    ],
    // Tech branded message
    [
      { id: 5, text: "I see a modern tech feel with blues and cyans. How does this look?", sender: 'bot', delay: 2000, theme: 'tech' },
      { id: 6, text: "That's exactly what we want!", sender: 'user', delay: 2000 }
    ],
    // Luxury branded message
    [
      { id: 5, text: "I'm thinking rich browns and gold accents for a luxury feel", sender: 'bot', delay: 2000, theme: 'luxury' },
      { id: 6, text: "Perfect, very sophisticated", sender: 'user', delay: 2000 }
    ],
    // Playful branded message
    [
      { id: 5, text: "How about bright colors and rounded shapes like this?", sender: 'bot', delay: 2000, theme: 'playful' },
      { id: 6, text: "The kids will love it!", sender: 'user', delay: 2000 }
    ],
    // Minimalist branded message
    [
      { id: 5, text: "Clean, black and white with subtle grays would suit your aesthetic", sender: 'bot', delay: 2000, theme: 'minimalist' },
      { id: 6, text: "It's perfectly aligned with our philosophy", sender: 'user', delay: 2000 }
    ]
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

  // Start a specific conversation based on theme selection
  const startConversationForTheme = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    // Clear any existing timers
    if (stateTimerRef.current) {
      clearTimeout(stateTimerRef.current);
    }
    
    // If theme is empty, don't do anything specific
    if (theme === 'empty') return;
    
    const conversationIndex = themeToConversationMap[theme] || 0;
    
    // Reset chat state
    setVisibleMessages([]);
    setCurrentIndex(0);
    setCurrentConversation(conversationIndex);
    setStepState(StepState.WAITING_FOR_INPUT);
    setUserSelectedTheme(true);
    
    // Start with empty state
    onThemeChange('empty');
    
    // Schedule the state transitions
    handleStateTransitions(conversationIndex);
  };

  // Handle the progression of states for a brand conversation
  const handleStateTransitions = (conversationIndex: number) => {
    // Calculate timing:
    // - Empty state + initial messages: 30% of total time
    // - Branded state: 70% of total time
    
    // Default total step duration: 15 seconds
    const totalStepDuration = 15000;
    const initialStateDuration = totalStepDuration * 0.3; // 30% for initial messages
    
    // Set timer to transition to branded state after initial messages
    stateTimerRef.current = setTimeout(() => {
      // Apply the brand theme
      const brandTheme = ['eco', 'tech', 'luxury', 'playful', 'minimalist'][conversationIndex] as 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist';
      onThemeChange(brandTheme);
      setStepState(StepState.BRANDED);
      
      // Set timer to transition to the next conversation
      stateTimerRef.current = setTimeout(() => {
        // Move to next conversation only if user hasn't manually selected a theme
        if (!userSelectedTheme) {
          const nextConversation = (conversationIndex + 1) % initialConversations.length;
          
          // Reset state for next conversation
          setVisibleMessages([]);
          setCurrentIndex(0);
          setCurrentConversation(nextConversation);
          setStepState(StepState.WAITING_FOR_INPUT);
          
          // Reset to empty state
          onThemeChange('empty');
          
          // Continue the carousel
          handleStateTransitions(nextConversation);
        }
      }, totalStepDuration * 0.7); // 70% of time for branded state
      
    }, initialStateDuration);
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

  // Display messages with proper timing based on current state
  useEffect(() => {
    // Only process messages in WAITING_FOR_INPUT state (initial messages)
    if (stepState !== StepState.WAITING_FOR_INPUT) return;
    
    // Get the right message set based on current state
    const currentMessages = initialConversations[currentConversation];
    
    if (currentIndex < currentMessages.length) {
      const timer = setTimeout(() => {
        const message = currentMessages[currentIndex];
        setVisibleMessages(prev => [...prev, message]);
        setCurrentIndex(prev => prev + 1);
      }, currentMessages[currentIndex].delay);
      
      return () => clearTimeout(timer);
    } else if (currentIndex === currentMessages.length) {
      // All initial messages have been displayed, now show the branded message
      const brandedMessageTimer = setTimeout(() => {
        // Add the themed branded message
        const brandedMessage = brandedMessages[currentConversation][0];
        setVisibleMessages(prev => [...prev, brandedMessage]);
        
        // Apply theme change
        if (brandedMessage.theme && brandedMessage.theme !== 'empty') {
          onThemeChange(brandedMessage.theme);
        }
        
        // Then add the user response
        setTimeout(() => {
          const userResponse = brandedMessages[currentConversation][1];
          setVisibleMessages(prev => [...prev, userResponse]);
          setCurrentIndex(prev => prev + 1);
          
          // Move to BRANDED state
          setStepState(StepState.BRANDED);
        }, brandedMessages[currentConversation][1].delay);
      }, 1000); // Small gap before starting branded messages
      
      return () => clearTimeout(brandedMessageTimer);
    }
  }, [currentIndex, currentConversation, stepState]);

  // Initial setup - start the first conversation if no theme is selected
  useEffect(() => {
    if (currentTheme === 'empty' && !userSelectedTheme) {
      // Begin the carousel with the first conversation
      handleStateTransitions(0);
    }
    
    return () => {
      // Cleanup any timers on unmount
      if (stateTimerRef.current) {
        clearTimeout(stateTimerRef.current);
      }
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
