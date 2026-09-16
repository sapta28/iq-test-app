import React, { useEffect, useRef, useState } from "react";

interface ScrollZoomInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const ScrollZoomIn: React.FC<ScrollZoomInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  style = {},
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className || undefined}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.86)",
        transition: `opacity ${duration}s cubic-bezier(0.25, 1, 0.4, 1) ${delay}s, transform ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
