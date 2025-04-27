import { useState, useEffect } from 'react';

const useTypeWriting = (text = '', speed, delay) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showTitle, setShowTitle] = useState(true); // 👈 nuevo estado

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }

        setShowTitle(true); // mostrándose el título
      } else {
        setTypedText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
          setShowTitle(false); // 👈 oculta el título cuando se borra todo
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const output = `${typedText}${cursorVisible ? '|' : ''}`;

  return { output, showTitle }; // 👈 devuelve ambos
};

export default useTypeWriting;
