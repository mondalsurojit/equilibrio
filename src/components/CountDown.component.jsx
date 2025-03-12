import React, { useState, useEffect } from 'react';

const CountDown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Parse the target date if it's a string
    const target = typeof targetDate === 'string' 
      ? new Date(targetDate).getTime()
      : targetDate.getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;
      
      // Calculation for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
      
      // Animate on second change
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    };
    
    // Update immediately on mount
    updateCountdown();
    
    // Set up interval for updates
    const intervalId = setInterval(updateCountdown, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);
  
  // Transform digit with leading zero
  const formatDigit = (digit) => digit < 10 ? `0${digit}` : digit;
  
  // Render the individual time unit with its label
  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className={`relative overflow-hidden ${animate ? 'transform-gpu scale-105 transition-transform duration-300' : 'transition-transform duration-300'}`}>
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/30 rounded-lg p-1 xs:p-2 md:p-3 lg:p-4 w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 shadow-lg relative">
          {/* Abstract tech lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-400"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-purple-500"></div>
            <div className="absolute top-1/3 left-0 h-px w-full bg-cyan-400"></div>
          </div>
          
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg"></div>
          
          {/* Number with digital font appearance */}
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono font-bold text-center">
            {formatDigit(value)}
          </div>
        </div>
      </div>
      <div className="mt-1 md:mt-2 text-xs sm:text-sm text-cyan-400 uppercase tracking-wider font-mechanism">
        {label}
      </div>
    </div>
  );
  
  // Separator component
  const Separator = () => (
    <div className="flex items-center text-cyan-500 text-base xs:text-lg sm:text-xl md:text-2xl font-mono pb-4 xs:pb-6">:</div>
  );
  
  return (
    <div className="w-full px-1 sm:px-2">
      <div className="relative">
        <div className="relative p-1 md:p-2 rounded-lg">
          <div className="flex justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <TimeUnit value={timeRemaining.days} label="Days" />
            <Separator />
            <TimeUnit value={timeRemaining.hours} label="Hours" />
            <Separator />
            <TimeUnit value={timeRemaining.minutes} label="Min" />
            <Separator />
            <TimeUnit value={timeRemaining.seconds} label="Sec" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;