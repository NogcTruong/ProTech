interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

export default function Skeleton({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "md",
}: SkeletonProps) {
  const roundedClasses = {
    none: "",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={`bg-gray-200 animate-pulse ${width} ${height} ${roundedClasses[rounded]} ${className}`}
    ></div>
  );
}
