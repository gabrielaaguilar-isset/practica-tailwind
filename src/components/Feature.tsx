"use client";
import { useEffect, useRef } from "react";
import EcosytemIcon from "../assets/icons/ecosystem.svg";
import {motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface Props {
  title: string;
  description: string;
}
export const Feature = ({ title, description }: Props) => {
    const offesetX = useMotionValue(0);
    const offesetY = useMotionValue(0);

    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offesetX}px ${offesetY}px, black, transparent)`;

    const border= useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const updateMousePosition = (e:MouseEvent) =>{

            if(!border.current) return; 

            const borderRect = border.current?.getBoundingClientRect(); 
            offesetX.set(e.x - borderRect?.x);
            offesetY.set(e.y - borderRect?.y);

        }
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    },[])
  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosytemIcon />
      </div>
      <h3 className="mt-6 font-bold ">{title}</h3>
      <p className="mt-3 text-white/70">{description}</p>
    </div>
  );
};
