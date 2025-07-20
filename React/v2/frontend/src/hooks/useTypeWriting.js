import { useState, useEffect } from 'react';

const useTypeWriting = (data) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const { title, speed, delay } = data[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(title.slice(0, index + 1));
        setIndex(prev => prev + 1);
        if (index + 1 === title.length) { 
          setTimeout(() => setIsDeleting(true), delay); 
        }
        setShowTitle(true);
      } else {
        setTypedText(title.slice(0, index - 1));
        setIndex(prev => prev - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
          setShowTitle(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
          setIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, currentIndex, data]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const output = `${typedText}${cursorVisible ? '|' : ''}`;
  return { output, showTitle };
};

export default useTypeWriting;