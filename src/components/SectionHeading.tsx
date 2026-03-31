import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, className, align = "center" }: SectionHeadingProps) => (
  <div className={cn("mb-10 lg:mb-14", align === "center" ? "text-center" : "text-left", className)}>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div
      className={cn(
        "mt-4 h-1 w-16 bg-accent rounded-full",
        align === "center" ? "mx-auto" : ""
      )}
    />
  </div>
);

export default SectionHeading;
