export default function CompareProductsLoading() {
  return (
    <div className="container py-5 md:py-6">
      <div className="mb-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
              </th>
              {[1, 2, 3].map((i) => (
                <th key={i} className="p-4 text-center">
                  <div className="space-y-2">
                    <div className="w-20 h-20 bg-gray-200 rounded mx-auto animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-20 mx-auto animate-pulse"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <tr key={row} className="border-b">
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                </td>
                {[1, 2, 3].map((col) => (
                  <td key={col} className="p-4 text-center">
                    <div className="h-4 bg-gray-200 rounded w-20 mx-auto animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
      </div>
    </div>
  );
}
