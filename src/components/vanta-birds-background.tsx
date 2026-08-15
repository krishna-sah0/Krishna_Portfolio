"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export function VantaBirdsBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Only initialize vanta effect once
    if (!vantaEffect && myRef.current) {
      // Vanta often expects THREE to be globally available
      if (typeof window !== "undefined") {
        (window as any).THREE = THREE;
      }
      
      const effect = BIRDS({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // Default to dark, will update immediately below
        backgroundColor: 0x020617,
        color1: 0x3b82f6, // Blue
        color2: 0xec4899, // Pink
        colorMode: "variance",
        birdSize: 1.2,
        wingSpan: 20.0,
        speedLimit: 3.0,
        separation: 50.0,
        alignment: 20.0,
        cohesion: 20.0,
        quantity: 3.0
      });
      setVantaEffect(effect);
    }

    return () => {
      // Cleanup on unmount
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  // Dynamically update background color when theme changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        backgroundColor: resolvedTheme === "dark" ? 0x020617 : 0xf8fafc,
      });
    }
  }, [resolvedTheme, vantaEffect]);

  return (
    <div
      ref={myRef}
      className="fixed inset-0 w-[100vw] h-[100vh] -z-10 pointer-events-none opacity-[7%]"
    />
  );
}
