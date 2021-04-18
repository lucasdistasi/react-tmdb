export const ShowEpisodeRowComponent = ({episodeNumber, episodeName, airDate, voteAverage}) => {

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {episodeNumber}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {episodeName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {airDate || "unknown"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {voteAverage.toFixed(1) === "0.0" ? "unknown" : voteAverage.toFixed(1)}
      </td>
    </tr>
  )
}
