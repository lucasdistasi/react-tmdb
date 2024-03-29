import Swal from "sweetalert2";

export const RadioButtonAdultSearchComponent = () => {

  const askForConfirmation = (e) => {
    if (e.target.checked) {
      Swal.fire({
        title: 'Are you sure?',
        text: "This might include +18 adult searches results",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        showClass: {
          popup: 'animate__animated animate__flipInX'
        },
        hideClass: {
          popup: 'animate__animated animate__flipOutY'
        }
      }).then((result) => {
        e.target.checked = result.isConfirmed
      })
    }
  }

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
                ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                onClick={askForConfirmation}/>
        <label htmlFor="adult-only"
               className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
        </label>
      </div>
    </div>
  )
}
