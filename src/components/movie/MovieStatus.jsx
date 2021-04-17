export const MovieStatus = ({status}) => {

  return (
    status ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Movie Status</p>
        {
          <p className="italic">{status}</p>
        }
      </div> : null
  )
}
