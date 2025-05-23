"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FlickerTextProps {
  text: string
  className?: string
  color?: string
  delay?: number
  duration?: number
  startAnimation?: boolean // Control when animation should start
}

interface CharacterState {
  char: string
  opacity: number
}

export default function FlickerText({ 
  text, 
  className = "", 
  color = "inherit", 
  delay = 0, 
  duration = 2000,
  startAnimation = true // By default, start immediately
}: FlickerTextProps) {
  const [characters, setCharacters] = useState<CharacterState[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    // Initialize characters with opacity 0
    const initialChars: CharacterState[] = text.split("").map(char => ({
      char: char === " " ? "\u00A0" : char,
      opacity: 0
    }));
    
    setCharacters(initialChars);
  }, [text]);

  // Only start animation when startAnimation prop becomes true
  useEffect(() => {
    if (startAnimation && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        animateCharacters();
        setHasAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration, startAnimation, hasAnimated]);
   console.log(isAnimating)
  const animateCharacters = () => {
    // Number of flickers for each character
    const flickerCount = 3;
    // Base duration for each flicker
    const flickerDuration = duration / (flickerCount * 2);
    
    // Animate each character
    text.split("").forEach((_, charIndex) => {
      // Stagger the start time for each character
      const charDelay = charIndex * 50;
      
      // Create the flicker sequence for this character
      for (let flicker = 0; flicker < flickerCount; flicker++) {
        // Time to start this flicker
        const flickerStart = charDelay + (flicker * flickerDuration * 2);
        
        // First - flicker on with random intensity
        setTimeout(() => {
          setCharacters(prev => {
            const newChars = [...prev];
            if (newChars[charIndex]) {
              newChars[charIndex] = {
                ...newChars[charIndex],
                opacity: Math.random() * 0.5 + 0.5 // Random between 0.5 and 1
              };
            }
            return newChars;
          });
        }, flickerStart);
        
        // Then - flicker down to low intensity
        setTimeout(() => {
          setCharacters(prev => {
            const newChars = [...prev];
            if (newChars[charIndex]) {
              newChars[charIndex] = {
                ...newChars[charIndex],
                opacity: Math.random() * 0.3 // Random between 0 and 0.3
              };
            }
            return newChars;
          });
        }, flickerStart + flickerDuration);
      }
      
      // Finally - set to full opacity
      setTimeout(() => {
        setCharacters(prev => {
          const newChars = [...prev];
          if (newChars[charIndex]) {
            newChars[charIndex] = {
              ...newChars[charIndex],
              opacity: 1
            };
          }
          return newChars;
        });
      }, charDelay + (flickerCount * flickerDuration * 2) + 50);
    });
  };

  return (
    <span className={cn("inline-block main-text", className)} style={{ color }}>
      {characters.map((char, i) => (
        <span 
          key={i}
          className="inline-block transition-opacity duration-50"
          style={{ opacity: char.opacity }}
        >
          {char.char}
        </span>
      ))}
    </span>
  );
}