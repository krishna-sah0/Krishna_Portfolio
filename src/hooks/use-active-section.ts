import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the very top, active section is home "/"
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      let currentSection = "/";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          // or if the element takes up most of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `/#${id}`;
            break;
          }
        }
      }

      // If no section matched (e.g. at the bottom), find the one closest to the top
      if (currentSection === "/") {
        let minDistance = Infinity;
        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = `/#${id}`;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
