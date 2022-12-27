import React,{useState,useEffect} from 'react'
import './Row.css'
import axios from './axios'
const Row = ({title,fetchUrl,isLargeRow = false}) => {
    const [movies,setMovies] = useState([])
useEffect(() => {
  async function fetchData(){
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
    return request
  }
  fetchData()
}, [fetchUrl])
console.log(movies)
const base_url = "https://image.tmdb.org/t/p/original/"
  return (
    <div className='row' >
      <h1>{title}</h1>
      <div className='row__posters'>

      {movies.map((movie)=>{
      return(
        <div>

          {((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && 
         <div>
            <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
         </div>}
        </div>
      )
      })}
      </div>
    </div>
  )
}

export default Row
