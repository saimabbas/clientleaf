"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const BrownBg = () => {
  const pathRef = useRef(null);

  const startY = 250;
  const endY = 913;
  const originalCx1 = 200;
  const originalCy1 = 600;
  const originalCx2 = 800;
  const originalCy2 = 800;

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // GSAP timeline for slow, looping motion
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(
      { progress: 0 },
      {
        duration: 10, // total loop duration
        progress: 1,
        ease: "sine.inOut",
        onUpdate: function () {
          const p = this.targets()[0].progress;

          // Reduced amplitude for slower, smooth movement
          const cx1 = originalCx1 + Math.sin(p * Math.PI * 2) * 180;  // was 300
          const cy1 = originalCy1 + Math.sin(p * Math.PI * 3) * 160;  // was 300
          const cx2 = originalCx2 + Math.cos(p * Math.PI * 2) * 180;  // was 300
          const cy2 = originalCy2 + Math.cos(p * Math.PI * 3) * 160;  // was 300

          path.setAttribute(
            "d",
            `M-129 ${endY} V${startY} C${cx1} ${cy1} ${cx2} ${cy2} 1257 ${endY} H-129 Z`
          );
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <svg
      width="650"
      height="775"
      viewBox="0 0 650 775"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_3407_891)">
        <path
          ref={pathRef}
          d="M-129 913V250C200 600 800 800 1257 913H-129Z"
          fill="url(#paint0_linear_3407_891)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3407_891"
          x="-379"
          y="0"
          width="1886"
          height="1163"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="125"
            result="effect1_foregroundBlur_3407_891"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3407_891"
          x1="564"
          y1="250"
          x2="564"
          y2="913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F00" />
          <stop offset="0.5" stopColor="#FF8F39" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrownBg;
