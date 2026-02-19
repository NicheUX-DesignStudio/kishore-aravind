// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-muted-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl text-kinetic">404</span>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to familiar territory.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="mailto:contact@example.com" className="flex items-center gap-2">
              Contact Support
            </a>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;