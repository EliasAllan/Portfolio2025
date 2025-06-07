import { useState, useEffect } from 'react';
import './Cat.css';

function Cat() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="cat-page">
      <span className="cat" style={{ left: pos.x, top: pos.y }}>🐱</span>
    </div>
  );
}

export default Cat;
