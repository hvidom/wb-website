import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <a href="#">
            🎓 3-Tier Development Program <ArrowUpRight className="ml-1 size-4" />
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
            Explore Programs <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
