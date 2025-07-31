import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
};

export default function BaseModal({
  open,
  onClose,
  children,
  title,
  className,
}: BaseModalProps) {
  useEffect(() => {
    if (!open) return;

    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gray-200/75"
          onClick={onClose}
          aria-label="Đóng modal"
          style={{ zIndex: 1 }}
        />
        <div
          className={`relative inset-0 overflow-y-hidden z-10 ${
            className || ""
          }`}
        >
          <div className="flex min-h-full items-end sm:items-center justify-center text-center max-md:h-full p-4 sm:p-0">
            <div className="relative text-left rtl:text-right flex flex-col bg-white shadow-xl w-full sm:min-w-[600px] md:max-w-[800px] rounded-lg sm:my-8">
              <div className="max-md:h-full md:max-h-[calc(100vh_-_100px)] flex flex-col">
                <div className="relative shrink-0 h-12 px-[52px] py-2 border-b flex items-center">
                  <div className="w-full text-center">
                    <span className="text-lg font-bold font-lexend line-clamp-1">
                      {title}
                    </span>
                  </div>
                  <button
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center absolute right-2 top-2"
                    onClick={onClose}
                    aria-label="Đóng"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
