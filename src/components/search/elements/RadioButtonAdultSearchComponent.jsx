export const RadioButtonAdultSearchComponent = () => {

  return (
    <div className="w-full flex justify-between">
      <span className="text-gray-400 font-medium mr-3">
        Include adult searchs
      </span>

      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input type="checkbox"
               name="toggle"
               id="adult-only"
               className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200
                ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
        <label htmlFor="adult-only"
               className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
        </label>
      </div>
    </div>
  )
}
