import {Link} from "react-router-dom";
import {useState} from 'react'

export const NavbarComponent = () => {

  const [navbarStatus, setNavbarStatus] = useState("sm:hidden hidden")

  const toggleHamburger = () => {
    navbarStatus === "sm:hidden" ? setNavbarStatus("sm:hidden hidden") : setNavbarStatus("sm:hidden")
  }

  const itIsCurrentPath = (path) => {
    return window.location.pathname === path
  }

  return (
    <nav className="tmdb-lightblue">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" onClick={toggleHamburger}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {
                  itIsCurrentPath("/home") || itIsCurrentPath("/index") ?
                    <Link to="/home" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                      Home
                    </Link>
                    :
                    <Link to="/home" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </Link>
                }
                {
                  itIsCurrentPath("/shows") ?
                    <Link to="/shows" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                      Shows
                    </Link>
                    :
                    <Link to="/shows" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Shows
                    </Link>
                }
                {
                  itIsCurrentPath("/search") ?
                    <Link to="/search" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                      Search
                    </Link>
                    :
                    <Link to="/search" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Search
                    </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={navbarStatus} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center text-center">
          {
            itIsCurrentPath("/home") || itIsCurrentPath("/index") ?
              <Link to="/home" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                Home
              </Link>
              :
              <Link to="/home" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
          }
          {
            itIsCurrentPath("/shows") ?
              <Link to="/shows" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                Home
              </Link>
              :
              <Link to="/shows" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Shows
              </Link>
          }
          {
            itIsCurrentPath("/search") ?
              <Link to="/search" className="tmdb-blue text-white px-3 py-2 rounded-md text-sm font-medium font-bold" aria-current="page">
                Search
              </Link>
              :
              <Link to="/search" className="text-gray-300 hover_tmdb-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Search
              </Link>
          }
        </div>
      </div>
    </nav>
  )
}
