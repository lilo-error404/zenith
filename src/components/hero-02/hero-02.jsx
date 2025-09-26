import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero02 = () => {
  return (
     <div className="min-h-screen flex items-center justify-center">
      <div
        className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>

          <h1
            className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter text-white">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-white">
          O aplicativo que ajuda você a atingir o pico da sua produtividade com foco e organização.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-[#FF7A1A] hover:bg-[#123C60]">
              Começar <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none hover:bg-[#123C60] hover:text-white">
              <CirclePlay className="h-5! w-5!" /> Testar
            </Button>
          </div>
        </div>
        <img className="w-full aspect-video bg-accent rounded-xl" src="/guy.jpg" />
      </div>
    </div> 
  );
};

export default Hero02;
