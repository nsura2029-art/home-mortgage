import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 px-5 py-3 text-white shadow-lg shadow-indigo-950/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-950/25",
        blue: "bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-violet-600/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/35",
        outline: "border border-indigo-100 bg-white/75 px-5 py-3 text-navy shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white",
        ghost: "px-4 py-2 text-slate-600 hover:bg-indigo-50/80 hover:text-indigo-950",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
