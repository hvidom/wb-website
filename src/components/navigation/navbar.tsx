import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navigation/logo";
import { NavMenu } from "@/components/navigation/nav-menu";
import { NavigationSheet } from "@/components/navigation/navigation-sheet";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky header top-0 z-50 h-16 border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button>
            Get Started <ArrowUpRight />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;