import { useState, useEffect } from 'react';

const Typewriter = ({ texts, typingSpeed = 50, deletingSpeed = 30, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const current = loopNum % texts.length;
    const fullText = texts[current];

    if (!isDeleting && text === fullText) {
      // Pause at the end of typing
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Move to the next string
      timer = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Type or delete a letter
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {text}
      <span 
        className="cursor" 
        style={{ 
          borderRight: '0.1em solid var(--color-primary)', 
          animation: 'blink 1s step-end infinite',
          marginLeft: '2px'
        }}
      ></span>
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--color-primary) }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
