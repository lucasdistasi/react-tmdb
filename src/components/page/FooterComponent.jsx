export const FooterComponent = () => {

  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700 text-center">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6">
          <div className="mt-16 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <img className="w-full h-16 mb-5"
                   src="/tmdb-logo.svg"
                   alt="The movie database logo"/>
              <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
              <p>All the information provided in this application it's retrieved by TMDb.</p>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                My Network
              </span>
              <span className="my-2">
                <a href="https://www.linkedin.com/in/lucas-david-distasi/"
                   className="text-blue-700  text-md hover:text-blue-500"
                   target="_blank"
                   rel="noreferrer">
                  Linkedin
                </a>
              </span>
              <span className="my-2">
                <a href="https://gitlab.com/lucas.distasi"
                   className="text-blue-700  text-md hover:text-blue-500"
                   target="_blank"
                   rel="noreferrer">
                  GitLab
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                TMDB
              </span>
              <span className="my-2">
                <a href="https://www.themoviedb.org/"
                   className="text-blue-700  text-md hover:text-blue-500"
                   target="_blank"
                   rel="noreferrer">
                  TMDB Site
                </a>
              </span>
              <span className="my-2">
                <a href="https://developers.themoviedb.org/4/getting-started/authorization#"
                   className="text-blue-700 text-md hover:text-blue-500"
                   target="_blank"
                   rel="noreferrer">
                  TMDB API
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center my-4">
            <a href="https://www.linkedin.com/in/lucas-david-distasi/"
               className="text-sm text-blue-700 font-bold mb-2"
               target="_blank"
               rel="noreferrer">
              2021 - By Lucas Di Stasi
            </a>
          </div>
          <div className="sm:w-2/3 text-center mb-6">
            <a href="https://www.themoviedb.org/"
               className="text-sm text-blue-700 font-bold mb-2"
               target="_blank"
               rel="noreferrer">
              Powered by The Movie DB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
