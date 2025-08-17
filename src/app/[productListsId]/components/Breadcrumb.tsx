interface BreadcrumbProps {
  categoryName: string;
}

export default function Breadcrumb({ categoryName }: BreadcrumbProps) {
  return (
    <div className="mb-5 md:mb-8">
      <nav className="min-w-0 hidden md:block">
        <ol className="flex items-center gap-x-1.5">
          <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
            <a
              href="#"
              type="button"
              className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
            >
              <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                Trang chủ
              </span>
            </a>
            <span role="presentation">/</span>
          </li>
          <li className="flex items-center gap-x-1.5 text-colorPray500 text-sm leading-6 min-w-0">
            <a
              href="#"
              type="button"
              className="flex items-center gap-x-1.5 group font-semibold min-w-0"
            >
              <span className="dark">
                <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 bg-colorPrimary400 rounded-full truncate text-colorPray900">
                  {categoryName}
                </span>
              </span>
            </a>
          </li>
        </ol>
      </nav>
      <a
        href="#"
        type="button"
        className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-colorPray300 text-colorPray700 bg-colorPray50 hover:bg-colorPray100 disabled:bg-colorPray50 aria-disabled:bg-colorPray50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75"
            clipRule="evenodd"
          />
        </svg>
        <span>{categoryName}</span>
      </a>
    </div>
  );
}
