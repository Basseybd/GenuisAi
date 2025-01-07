"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiClerk,
  SiStripe,
} from "react-icons/si";

// Generic fallback icons for OpenAI / Replicate:
import { FaRobot, FaMagic } from "react-icons/fa";

interface TechItem {
  name: string;
  description: string;
  Icon: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    Icon: <SiReact className="text-blue-400" size={48} />,
  },
  {
    name: "Next.js",
    description: "React framework with hybrid static & server rendering",
    Icon: <SiNextdotjs size={48} />,
  },
  {
    name: "TypeScript",
    description: "Strongly typed programming language for JavaScript",
    Icon: <SiTypescript className="text-blue-600" size={48} />,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    Icon: <SiTailwindcss className="text-cyan-400" size={48} />,
  },
  {
    name: "Prisma",
    description: "Next-generation Node.js & TypeScript ORM",
    Icon: <SiPrisma className="text-slate-50" size={48} />,
  },
  {
    name: "PostgreSQL",
    description: "Robust, open-source relational database (via Supabase)",
    Icon: <SiPostgresql className="text-indigo-400" size={48} />,
  },
  {
    name: "Clerk",
    description: "User management and auth, simplified",
    Icon: <SiClerk size={48} />,
  },
  {
    name: "Stripe",
    description: "Online payment processing for internet businesses",
    Icon: <SiStripe className="text-purple-500" size={48} />,
  },
  {
    name: "OpenAI",
    description: "AI for code, conversation, and images",
    Icon: <FaRobot className="text-green-400" size={48} />,
  },
  {
    name: "Replicate",
    description: "Music with meta/musicgen, video with minimax/video-01",
    Icon: <FaMagic className="text-pink-500" size={48} />,
  },
];

export default function LandingContent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-16">
      <h2 className="text-center text-4xl font-extrabold mb-10 text-white">
        Technologies Used
      </h2>

      <Carousel
        className="w-full max-w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {technologies.map((tech) => (
            <CarouselItem
              key={tech.name}
              className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="bg-[#192339] text-white border-none rounded-md shadow-lg">
                  <CardContent className="flex aspect-square flex-col items-center justify-center gap-2 p-6">
                    {tech.Icon}
                    <h3 className="text-lg font-bold">{tech.name}</h3>
                    <p className="text-sm text-zinc-400 text-center">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Buttons intentionally removed to hide navigation arrows */}
      </Carousel>
    </div>
  );
}
