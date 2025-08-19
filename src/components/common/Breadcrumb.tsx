import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isActive: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  homeLabel?: string;
  homeHref?: string;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  linkClassName?: string;
}

export default function Breadcrumb({
  items,
  showHome = true,
  homeLabel = "Trang chủ",
  homeHref = "/",
  className = "",
  itemClassName = "flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0",
  activeItemClassName = "text-colorPray500",
  linkClassName = "flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700",
}: BreadcrumbProps) {
  const allItems = showHome
    ? [{ label: homeLabel, href: homeHref, isActive: false }, ...items]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-x-1.5">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isActive = item.isActive || isLast;

          return (
            <li
              key={index}
              className={`${itemClassName} ${
                isActive ? activeItemClassName : ""
              }`}
            >
              {item.href && !isActive ? (
                <Link href={item.href} className={linkClassName}>
                  <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <Link href={item.href} className={linkClassName}>
                  <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 bg-colorPrimary400 rounded-full truncate text-colorPray900">
                    {item.label}
                  </span>
                </Link>
              )}

              {!isLast && <span role="presentation">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
