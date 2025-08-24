export default function NewsLoading() {
  return (
    <div className="container py-5 md:py-6">
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 rounded-lg p-1 flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-16 h-10 bg-gray-300 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-4 md:mb-10">
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-20 md:gap-y-10">
        <div className="space-y-4">
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex space-x-3">
              <div className="w-20 h-16 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse mb-4"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex space-x-3">
              <div className="w-16 h-16 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
