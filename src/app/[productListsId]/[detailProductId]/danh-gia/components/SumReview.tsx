import FeedbackModal from "@/components/common/FeedbackModal";

interface SumReviewProps {
  feedback: boolean;
  onOpenFeedback: () => void;
  onCloseFeedback: () => void;
}

export default function SumReview({
  feedback,
  onOpenFeedback,
  onCloseFeedback,
}: SumReviewProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end max-md:space-y-4 md:space-x-6">
      <div className="flex flex-col">
        <span className="text-3xl font-bold font-lexend">5.0 / 5</span>
        <div className="mt-1">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#171717] flex"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#171717] flex"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#171717] flex"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#171717] flex"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#171717] flex"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2">
          <span className="text-xs">3 đánh giá</span>
        </div>
      </div>
      <div className="flex flex-col space-y-0.5">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-0.5 w-7">
            <span className="w-2 text-xs">5</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <progress
              className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
              value={3}
              max={3}
            >
              100%
            </progress>
          </div>
          <span className="w-10 flex-shrink-0 text-xs">3</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-0.5 w-7">
            <span className="w-2 text-xs">4</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <progress
              className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
              value={0}
              max={0}
            >
              100%
            </progress>
          </div>
          <span className="w-10 flex-shrink-0 text-xs">0</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-0.5 w-7">
            <span className="w-2 text-xs">3</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <progress
              className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
              value={0}
              max={0}
            >
              100%
            </progress>
          </div>
          <span className="w-10 flex-shrink-0 text-xs">0</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-0.5 w-7">
            <span className="w-2 text-xs">2</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <progress
              className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
              value={0}
              max={0}
            >
              100%
            </progress>
          </div>
          <span className="w-10 flex-shrink-0 text-xs">0</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-0.5 w-7">
            <span className="w-2 text-xs">1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <progress
              className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
              value={0}
              max={0}
            >
              100%
            </progress>
          </div>
          <span className="w-10 flex-shrink-0 text-xs">0</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:w-[200px]">
        <div>
          <button
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
            onClick={onOpenFeedback}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>Viết đánh giá</span>
          </button>
          <FeedbackModal
            open={feedback}
            onClose={onCloseFeedback}
            title="Đánh giá và nhận xét"
          />
        </div>
      </div>
    </div>
  );
}
