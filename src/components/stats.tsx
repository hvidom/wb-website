"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Calendar, type LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface EnhancedStatSectionProps {
  title: string;
  description: string;
  stats: Stat[];
}

const defaultProps: EnhancedStatSectionProps = {
  title: "Measurable Impact",
  description:
    "Our Leadership Program delivers measurable outcomes that matter to grant funders, employers, and community stakeholders:",
  stats: [
    {
      label: "Report improved social connections and community integration",
      value: "92%",
      description: "quicker",
      icon: Clock,
    },
    {
      label: "Participants gain employment or advance their careers ",
      value: "78%",
      description: "within 6 months",
      icon: Users,
    },
    {
      label: "Community projects and businesses",
      value: "45+",
      description: "launched by program alumni",
      icon: Calendar,
    },
  ],
};

function Stat1Page({ title, description, stats }: EnhancedStatSectionProps) {
  return (
    <section className="bg-trancperent py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:mb-12 md:text-5xl lg:mb-16 lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20 mt-5 text-muted-foreground text-xl sm:text-2xl">
          {description}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <stat.icon className="mb-4 h-12 w-12 text-primary" />
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mb-2 text-5xl font-bold text-foreground md:text-6xl">
                  {stat.value}
                </p>
                <p className="text-xl font-semibold text-primary">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const Stat1 = () => {
  return <Stat1Page {...defaultProps} />;
};

export { Stat1 };