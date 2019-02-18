const formDOM = document.querySelector("form")
const searchDOM = document.querySelector("input[name='search']")
const resultWrapDOM = document.querySelector("#results-wrap")

const OMDB_KEY = "b047f17d"
const OMDB_URL = `http://www.omdbapi.com/?apikey=${OMDB_KEY}`

const searchMovies = text => fetch(`${OMDB_URL}&s=${text}`)

formDOM.addEventListener('submit', e => {
	e.preventDefault();

	const searchTerm = searchDOM.value

	resultWrapDOM.innerHTML = `<div class="card" align="center">
				Loading...
			</div>`

	searchMovies(searchTerm)
		.then(res => res.json())
		.then(movieData => {
			const results = movieData.Search

			resultWrapDOM.innerHTML = `<div class="card">
				<ul>
					${results.map(r => `<li>${r.Title} (${r.Year})</li>`).join('')}
				</ul>
			</div>`
		})


	console.log({ searchTerm })
})