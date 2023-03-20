import { showError } from "./show-error"

export function renderMovies (moviesValue) {  
  const {Search, Response, Error = 'Error desconocido'} = moviesValue || {}  
  if (Response === 'False' || !Search) {
   showError(Error)
   return 
  }
 
  const figureElements = Search.map((movie) => {
     return `<figure>
               <img 
                 src="${movie.Poster}" 
                 alt="${movie.Type}"
               >
               <figcaption>${movie.Title} <time>${movie.Year}</time></figcaption>
             </figure>`
   }) 
   
   document.querySelector('.my-grid')
     .innerHTML = figureElements.join("")
 }