# TMDB-React-App

### This is my second React App. 
#### It's an SPA that consumes and displays data from The Movie Database API.


## Technologies used

* React 17
* Tailwind 2
* Axios
* Font Awesome
* Sweet Alert 2
* Fslightbox
* React Responsive
* React Router
* Animate CSS

# Setting up

1. You **MUST** have nodejs, npm & yarn installed.
2. Create an account at _https://www.themoviedb.org/_ so you can get a free API KEY (This is needed to be able to retrieve the data)
3. Inside the project folder, at the root path, create a _.env_ file
4. Edit that file and add the following line
> REACT_APP_TMDB_API_KEY={YOUR_API_KEY}
5. Of course, don't put the curly braces.
6. Run  `yarn start` or `npm install`
7. If you have an error that says _This version of npm is compatible with lockfileVersion@1, but npm-shrinkwrap.json was generated for lockfileVersion@0. I'll try to do my best with it!_, delete node_modules folder and package-lock.json
8. Run `yarn install`
9. Run `yarn start`

# Disclaimer

TMDB API retrieve a big wide variety of movies and tv shows, including adult content.
I've tried my best to hide all adult content. 

Through the search page you will be able to search for adult content (movies and people). 
* For people, you WON'T be able to see his/her  movies/shows.
* For movies, you WON'T be able to see the movie description. You will be redirected to the home page.

Sadly, TMDB does not provide an adult attribute for TV Shows. 
* Even I've made an effort to avoid adult content to be displayed, some adult TV Shows might be displayed in the application. This is solely TMDB responsibility.

# Videos

### Home Page
[![Alt text for your video](https://img.youtube.com/vi/HjndYZ5-oP0/0.jpg)](https://youtu.be/HjndYZ5-oP0)

### Movie Page
[![Alt text for your video](https://img.youtube.com/vi/cUqLIwOb15I/0.jpg)](https://youtu.be/cUqLIwOb15I)

### Show Page
[![Alt text for your video](https://img.youtube.com/vi/5dPpPW1bLAY/0.jpg)](https://youtu.be/5dPpPW1bLAY)

### Shows Page
[![Alt text for your video](https://img.youtube.com/vi/YsYRnQ56j6U/0.jpg)](https://youtu.be/YsYRnQ56j6U)

### Person Page
[![Alt text for your video](https://img.youtube.com/vi/fZZCzHbEMd4/0.jpg)](https://youtu.be/fZZCzHbEMd4)

### Search Page
[![Alt text for your video](https://img.youtube.com/vi/Su7YZcXDhKk/0.jpg)](https://youtu.be/Su7YZcXDhKk)

### Genres Page
[![Alt text for your video](https://img.youtube.com/vi/cqIzums3ZA4/0.jpg)](https://youtu.be/cqIzums3ZA4)

### Genre Results Page
[![Alt text for your video](https://img.youtube.com/vi/cgtAJCeb1wQ/0.jpg)](https://youtu.be/cgtAJCeb1wQ)
