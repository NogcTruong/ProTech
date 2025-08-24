export default function AuthorsLoading() {
  return (
    <div className="container py-5 md:py-6">
      <div className="text-center mb-8">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 animate-pulse"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>

            <div className="flex justify-between">
              <div className="text-center">
                <div className="h-6 bg-gray-200 rounded w-8 mx-auto animate-pulse mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-12 mx-auto animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-6 bg-gray-200 rounded w-8 mx-auto animate-pulse mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-16 mx-auto animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-6 bg-gray-200 rounded w-8 mx-auto animate-pulse mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-12 mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
