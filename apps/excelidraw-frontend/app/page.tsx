import { ArrowRight, Github, Play, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "./assets/heroimage.jpg";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Draw, Create, and{" "}
                <span className="text-gradient">Collaborate</span> Effortlessly
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                The ultimate virtual whiteboard for teams. Create beautiful
                hand-drawn style diagrams, flowcharts, and sketches with
                intuitive tools and real-time collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={"/signin"}>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group cursor-pointer"
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={"/signup"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:scale-110 transition-all cursor-pointer"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-4 ml-4">
                • Free forever • Export anywhere
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-float">
                <img
                  src="./heroimage.jpg"
                  alt="ExceliDraw interface showing collaborative drawing"
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-scale-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything you need to{" "}
              <span className="text-gradient">bring ideas to life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for seamless creativity and
              collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Intuitive Drawing
                </h3>
                <p className="text-muted-foreground">
                  Natural hand-drawn feel with powerful vector tools. Create
                  beautiful diagrams with just a few clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Real-time Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Work together seamlessly with your team. See changes instantly
                  as you collaborate in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Github className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Export Anywhere</h3>
                <p className="text-muted-foreground">
                  Export your creations as PNG, SVG, or share them directly.
                  Perfect for presentations and documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to start creating?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unleash your ideas with ExceliDraw — collaborate instantly, no
              setup, just creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/room"}>
                <Button variant="hero" size="lg" className="group">
                  Start Drawing Now
                  <ArrowRight className="ml-2 h-4 w-4 cursor-pointer group-hover:translate-x-1 hover:scale-110 transition-all " />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ExceliDraw</span>
            </div>
            <div className="flex space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 ExceliDraw. Made with ❤️ for creative minds.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
