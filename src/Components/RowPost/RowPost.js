import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'

import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  
 
  }, [])
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieClick= (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&lamguage=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        } else {
          console.log("No video avalialble");
        }
    })

  }
  
  return (
    <div className='row' >
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>

           <img onClick={()=>handleMovieClick(obj.id)} className={props.isSmall? 'smallPoster' : 'poster' } src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}

            
        </div>
       { urlid && <YouTube opts={opts} videoId={urlid.key} /> }

    </div>

  )
}

export default RowPost