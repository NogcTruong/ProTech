import Skeleton from "@/components/common/Skeleton";

export default function HomeLoading() {
  return (
    <main className="home-page bg-[#e0f2fe]">
      <div className="container py-6 flex flex-col">
        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse mb-8"></div>

        <div className="mb-8">
          <Skeleton className="w-1/3 mb-6" height="h-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4 space-y-3">
                  <Skeleton className="w-3/4" height="h-5" />
                  <Skeleton className="w-1/2" height="h-4" />
                  <Skeleton className="w-2/3" height="h-4" />
                  <div className="flex items-center space-x-2">
                    <Skeleton className="w-20" height="h-6" />
                    <Skeleton className="w-16" height="h-4" />
                  </div>
                  <Skeleton className="w-full" height="h-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <Skeleton className="w-1/3 mb-6" height="h-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-4 text-center animate-pulse"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <Skeleton className="w-3/4 mx-auto" height="h-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="w-1/4" height="h-8" />
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg p-4 animate-pulse">
                  <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
                  <Skeleton className="w-3/4 mb-2" height="h-5" />
                  <Skeleton className="w-1/2 mb-2" height="h-4" />
                  <div className="flex items-center space-x-2">
                    <Skeleton className="w-20" height="h-6" />
                    <Skeleton className="w-16" height="h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Skeleton className="w-1/3 mb-6" height="h-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <Skeleton className="w-3/4 mb-3" height="h-6" />
                  <Skeleton className="w-1/2 mb-4" height="h-4" />
                  <Skeleton className="w-full" height="h-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <Skeleton className="w-1/3 mb-6" height="h-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-32 bg-gray-200"></div>
                <div className="p-4">
                  <Skeleton className="w-full mb-2" height="h-5" />
                  <Skeleton className="w-3/4 mb-2" height="h-4" />
                  <Skeleton className="w-1/2" height="h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
