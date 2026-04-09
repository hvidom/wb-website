import { Box, CircleCheck, Gem, type LucideIcon, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";

interface PricingPlan {
  name: string;
  description: string;
  term: string;
  price: number;
  isRecommended: boolean;
  icon: LucideIcon;
  features: string[];
  keyfeatures: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Advanced",
    term: "6 weeks • Online & In-Person",
    description: "For newcomers to Ireland seeking foundation skills for integration and personal development",
    price: 29,
    isRecommended: false,
    icon: Box,
    keyfeatures: [
      "Understanding Irish culture and society",
      "Building confidence and communication skills",
      "Developing goal-setting and planning abilities",
      "Creating personal integration roadmap",
      "Networking with peers and mentors",
    ],
    features: [
      "6 weekly group sessions (2 hours each)",
      "Personal workbook and resources",
      "Peer support group access",
      "Certificate of completion",
      "Community Access",
    ],
  },
  {
    name: "Advanced",
    term: "10 weeks • Hybrid",
    description: "For individuals ready to deepen their integration and develop professional/entrepreneurial skills",
    price: 79,
    isRecommended: true,
    icon: Gem,
    keyfeatures: [
      "Advanced professional communication",
      "Leadership and project management skills",
      "Employment strategies and career planning",
      "Business development fundamentals",
      "Building sustainable community connections",
    ],
    features: [
      "10 weekly sessions with expert facilitators",
      "One-on-one mentoring (3 sessions)",
      "Industry networking events",
      "Career/business action plan",
      "Access to job/business resources",
      "Advanced certificate",
    ],
  },
  {
    name: "Leadership",
    term: "12 weeks • In-Person with Online Support",
    description: "For aspiring community leaders, branch organizers, and social entrepreneurs who ready to take the next step",
    price: 199,
    isRecommended: false,
    icon: Users,
    keyfeatures: [
      "Strategic leadership capabilities",
      "Community organizing and mobilization",
      "Grant writing and fundraising skills",
      "Launching and managing projects/businesses",
      "Measuring social impact",
      "Creating employment opportunities for others",
    ],
    features: [
      "12 comprehensive weekly sessions",
      "Intensive mentoring program",
      "Real-world project implementation",
      "Leadership retreat (2 days)",
      "Alumni network access",
      "Ongoing support and resources",
      "Professional leadership certificate",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-medium text-center text-balance tracking-wide text-muted-foreground text-sm uppercase tracking-tide">
        Choose Your Path to Integration
      </p>
      <h2 className="text-balance text-center mt-2 font-bold text-4xl tracking-tight sm:text-5xl">
        Three Levels of Development
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Choose the program that matches your current stage and aspirations
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 overflow-clip sm:grid-cols-2 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border bg-muted/50 p-1 dark:bg-muted/75",
        {
          "shadow/5": plan.isRecommended,
        }
      )}
    >
      {plan.isRecommended && <BorderBeam duration={8} size={150} />}

      <div className="shadow/5 dark:shadow/45 relative overflow-hidden rounded-lg border bg-background px-6 pt-5 pb-4">
        {plan.isRecommended && (
          <Badge className="absolute top-3 right-3 bg-primary/20 text-primary dark:bg-primary/30">
            Most Popular
          </Badge>
        )}
        {plan.isRecommended && (
          <>
            {/* Circuit Board - Light Pattern */}
            <div
              className="pointer-events-none absolute inset-0 -top-px -left-2 z-0 not-dark:opacity-50"
              style={{
                backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
                backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
              }}
            />
          </>
        )}
        <plan.icon className="mb-5 text-primary" />
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-2xl">{plan.name}</h3>
        </div>
        <p className="mt-1 mb-2 text-muted-foreground">{plan.description}</p>
      </div>

      <div className="shadow/5 dark:shadow/45 mt-1 grow rounded-lg border bg-background px-6 pt-5 pb-10">
        <p className="mt-4 font-semibold text-4xl">${plan.price}</p>
        <p className="mt-1 font-medium text-muted-foreground text-sm tracking-normal">
          {plan.term}
        </p>
        <Button
          className="my-6 w-full"
          size="lg"
          variant={plan.isRecommended ? "default" : "outline"}
        >
          Get Started
        </Button>
        <div className="text-lg font-semibold">Key Outcomes</div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((keyfeature) => (
            <li className="flex items-center gap-2" key={keyfeature}>
              <CircleCheck className="size-4 shrink-0 fill-primary/10 text-primary dark:fill-primary/15" />
              {keyfeature}
            </li>
          ))}
        </ul>
        <div className="text-lg font-semibold my-4">Program Features</div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <CircleCheck className="size-4 shrink-0 fill-primary/10 text-primary dark:fill-primary/15" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
