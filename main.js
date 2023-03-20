import viewGrid from  './movies/views/grid-movies.html?raw'
import '@picocss/pico'


import './style.css'
import { BASE_URL, APIKEY } from './constants'
import { fetchMovies } from './movies/helpers/async-await-movies'
import { renderMovies } from './movies/views/render-movies'
import { showError } from './movies/views/show-error'

// import error from './movies/mocks/movie-not-found.json'




function moviesApp (rootElement) {
  if (!rootElement)
    throw new Error('No se encontró el elemento raíz de la aplicación')
  
    rootElement.innerHTML = `
  <div class="container">
    <h1>Mis Películas</h1>
    ${viewGrid}
  </div>
`
  const form = rootElement.querySelector('#my-form')
  if (!form) throw new Error('No existe el botón de Id search')

  form.addEventListener('submit', async e => {
    e.preventDefault()
    const { busca } = form // busca --> HTMLInputElement
    const url = `${BASE_URL}/?i=tt3896198&apikey=${APIKEY}&s=${busca.value.trim()}`     
    try {
      form.querySelector('button').setAttribute('aria-busy', true)
      renderMovies(await fetchMovies(url))
    } catch (error) {
      showError(error)
    }  finally {
      form.querySelector('button').removeAttribute('aria-busy')
    }    
  })
}


const app = document.querySelector('#app')
moviesApp(app)












