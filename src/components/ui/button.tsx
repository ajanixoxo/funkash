import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "whitespace-nowrap inline-flex items-center justify-center shrink-0 min-w-max border-2 cursor-pointer rounded-[14px] font-medium transition-all duration-200";

    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-5 py-2",
      lg: "px-6 py-3 text-lg",
    };

    const variantStyles = {
      primary:
        "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-95",
      secondary:
        "border-2 border-[#222946] text-[#222946] bg-transparent hover:text-white hover:bg-[#222946]",
      danger:
        "bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 shadow-[inset_0_3px_6px_rgba(0,0,0,0.25),0_2px_4px_rgba(220,38,38,0.3)]",
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
