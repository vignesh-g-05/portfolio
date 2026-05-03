import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-sm text-sm font-medium whitespace-nowrap transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary-foreground",
        destructive: "bg-destructive text-white",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent border-2 border-border",
      },

      size: {
        sm: "h-9 px-4 py-2",
        xs: "h-8 px-3",
        default:
          "h-9 px-4 text-xs md:h-10 lg:h-11 md:px-5 lg:px-6 md:text-sm lg:text-base",
        lg: "h-12 px-8 text-base",
      },

      motion: {
        lift: "hover:-translate-y-0.5 active:translate-y-0.5",
        press: "active:scale-95",
        none: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      motion: "press",
    },
  },
);

function Button({
  className,
  variant,
  size,
  motion,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, motion }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
