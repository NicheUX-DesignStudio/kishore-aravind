// src/components/NavLink.tsx
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, to, children, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={typeof className === 'function' 
          ? className
          : ({ isActive, isPending }) =>
              cn(
                className,
                isActive && "text-foreground font-semibold",
                isPending && "opacity-50"
              )
        }
        {...props}
      >
        {children}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };