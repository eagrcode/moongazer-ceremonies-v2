import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 w-36 tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-secondary text-gray-50 shadow hover:bg-secondary/90",
        destructive: "bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90",
        outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900",
        secondary: "text-secondary border-2 border-secondary shadow-sm hover:bg-secondary/20",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-10 font-semibold text-base",
        icon: "h-9 w-9",
        full: "px-4 py-4 w-full font-semibold bg-brand-light rounded-full text-secondary hover:bg-brand-primary",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
