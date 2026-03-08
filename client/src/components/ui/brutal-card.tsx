import * as React from "react"
import { cn } from "@/lib/utils"

const BrutalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "accent" | "primary" | "secondary" }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-card text-card-foreground",
    accent: "bg-accent text-accent-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-4 border-foreground brutal-shadow overflow-hidden transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
BrutalCard.displayName = "BrutalCard"

export { BrutalCard }
