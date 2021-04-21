export const InputNameComponent = () => {

  return (
    <div className="w-full">
      <div className="relative">
        <input type="text"
               id="input-name"
               className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2
                  px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                  focus:ring-blue-600 focus:border-transparent"
               placeholder="Name"/>
      </div>
    </div>
  )
}
