import { cn } from "@/lib/utils";

export function KrishnaSahMark({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img 
      src="/images/brand/my-logo.png" 
      alt="My Logo" 
      className={cn("object-contain rounded-full", className)}
      {...props} 
    />
  );
}

export function getMarkSVG(color: string) {
  return `<svg></svg>`; // Stub out getMarkSVG if it's used elsewhere
}
