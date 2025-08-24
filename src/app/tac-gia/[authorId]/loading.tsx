export default function AuthorDetailLoading() {
  return (
    <div className="container py-5 md:py-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex-1 text-center md:text-left">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto md:mx-0 animate-pulse mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto md:mx-0 animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto md:mx-0 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse mb-6"></div>

        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 animate-pulse"
          >
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>

              <div className="flex-1 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
