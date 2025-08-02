import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  onComplete = () => {},
  loop = true,
  loopDelay = 2000
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      onComplete();
      
      // If looping is enabled, reset after a delay
      if (loop) {
        setIsLooping(true);
        const resetTimer = setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setIsLooping(false);
        }, loopDelay);
        
        return () => clearTimeout(resetTimer);
      }
    }
  }, [currentIndex, text, speed, isTyping, onComplete, loop, loopDelay]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && currentIndex < text.length && !isLooping && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default Typewriter; 