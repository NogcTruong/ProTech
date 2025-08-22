import { CSSProperties, useState } from "react";

export type SortValue = "featured" | "price-asc" | "price-desc";

type SortDropdownProps = {
  value: SortValue;
  onChange: (next: SortValue) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const filterTableCSS: CSSProperties = isOpen
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute",
        margin: "0px",
      }
    : {};

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative min-w-[160px]"
      onClick={handleToggle}
    >
      <div className="w-full">
        <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
          <span className="block truncate">
            {value === "featured"
              ? "Nổi bật nhất"
              : value === "price-asc"
              ? "Giá thấp → cao"
              : "Giá cao → thấp"}
          </span>
          <span className="absolute inset-y-0 end-0 flex items-center px-2.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="h-5 w-5 flex-shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* filter Table */}
      {isOpen && (
        <div className="w-full z-20 group m-0" style={filterTableCSS}>
          <div className="">
            <ul className="relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-colorPray200 rounded-md shadow-lg bg-white p-1 max-h-60">
              <li
                className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                role="option"
                aria-selected="true"
                onClick={() => {
                  onChange("featured");
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="truncate">Nổi bật nhất</span>
                </div>
                {value === "featured" && (
                  <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-shrink-0 text-colorPray900"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m4.5 12.75l6 6l9-13.5"
                      />
                    </svg>
                  </span>
                )}
              </li>
              <li
                className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                role="option"
                aria-selected="true"
                onClick={() => {
                  onChange("price-asc");
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="truncate">Giá thấp → cao</span>
                </div>
                {value === "price-asc" && (
                  <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-shrink-0 text-colorPray900"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m4.5 12.75l6 6l9-13.5"
                      />
                    </svg>
                  </span>
                )}
              </li>
              <li
                className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                role="option"
                aria-selected="true"
                onClick={() => {
                  onChange("price-desc");
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="truncate">Giá cao → thấp</span>
                </div>
                {value === "price-desc" && (
                  <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-shrink-0 text-colorPray900"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m4.5 12.75l6 6l9-13.5"
                      />
                    </svg>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
