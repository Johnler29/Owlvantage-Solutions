import { useEffect, useMemo, useRef, useState } from "react";

export default function ScrollReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  variant = "pop",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const variantClassName = useMemo(() => {
    if (variant === "fade") return "reveal--fade";
    if (variant === "fade-up") return "reveal--fade-up";
    return "reveal--pop";
  }, [variant]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const Comp = as;

  return (
    <Comp
      ref={ref}
      className={`reveal ${variantClassName} ${isVisible ? "reveal--show" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
