import { useEffect, useState } from 'react';
import './Cat.css';

function Cat() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [catState, setCatState] = useState({ pos: { x: mousePos.x, y: mousePos.y }, action: 'walk', direction: 1 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    let frame;
    function update() {
      setCatState(state => {
        const dx = mousePos.x - state.pos.x;
        const dy = mousePos.y - state.pos.y;
        const dist = Math.hypot(dx, dy);
        const speed = dist > 200 ? 0.12 : 0.08;
        const newPos = { x: state.pos.x + dx * speed, y: state.pos.y + dy * speed };
        let action = state.action;
        if (dist > 200) {
          action = 'run';
        } else if (dist > 50) {
          action = 'walk';
        } else if (state.action !== 'pounce') {
          action = 'pounce';
          setTimeout(() => setCatState(s => ({ ...s, action: 'walk' })), 400);
        }
        const direction = dx < 0 ? -1 : 1;
        return { pos: newPos, action, direction };
      });
      frame = requestAnimationFrame(update);
    }
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [mousePos]);

  return (
    <div className="cat-page">
      <span
        className={`cat ${catState.action}`}
        style={{ left: catState.pos.x, top: catState.pos.y, '--direction': catState.direction }}
      >
        🐈
      </span>
    </div>
  );
}

export default Cat;
