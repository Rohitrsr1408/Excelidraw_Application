import { Zap } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
const navbar=() => {
    return (
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 ml-4">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground " />
            </div>
            <Link href="/">
              <span className="font-bold text-xl ">ExceliDraw</span>
              </Link>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            
            <Link href={"/signup"}>
              <Button
                variant="hero"
                className="hover:scale-110 transition-all cursor-pointer m-4 "
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    );
}
export default navbar;