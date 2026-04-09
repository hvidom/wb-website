import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LightRays from './lightrays';


 


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
       <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1}
    lightSpread={0.5}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
/>
</div>
</div>
<div className="relative z-10">
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <a href="#">
          🎓 3-Tier Development Program<ArrowUpRight className="ml-1 size-4" />
          </a>
        </Badge>
        <h1 className="mt-6 font-bold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Leadership Program for Irish Integration
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Transform your integration journey through structured learning, mentorship, and community connection.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Explore Programs <ArrowUpRight className="size-5" />
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="size-5" /> Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
}
