import { useEffect, useRef } from 'react';

function SlideInSection({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <div ref={ref} className="fade-slide">
      {children}
    </div>
  );
}

export default SlideInSection;
