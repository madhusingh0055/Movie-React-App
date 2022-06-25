import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./Data";
import Card from './demo1';
import MovieCard from "./MovieCard";
import Information from "./Information";
import './movieList.css';
import { Pagination } from "@mui/material";



const FetchMovie = () => {
  
    const[movieList, setMovieList]  = useState([]);
    const [searchs, setSearchs] = useState("");
    const [filteredData, setFilteredData] = useState(movieList);
    const [currentPage, setCurrentPage] = useState(1);
    
    const[offset,setOffset] = useState(1)
    const[pages, setPages] = useState();
    const perpage = 5;
    
   
    
    
   
    var movies = [];

    // async function fetchData (){
    //     const url = "https://api.themoviedb.org/3/movie/550?api_key=c4e2a7e2f1aeb4bd23fdf20ed1647ec6";
    //     try {
    //         const response = await axios.get(url);
    //         movies.push(response.data)
    //         setMovieList(movies);
    //         console.log(response.data.Title);
            
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //   }
  
    async function fetchMovie()
    {
      for(var i=0;i<Data.length;i++)
      {
        Data[i]["Id"] = i;
      }
      //  Data["Id"] = count;
       setMovieList(Data);
       movies = movieList;
    
    
      setPages(Math.ceil((Data.length)/perpage))
      // console.log(pages.length)
    }
      
    

      useEffect(() => {
        fetchMovie()
        
      }, [])

// var title = Data[0]["Title"];
// console.log(title)

  const handleClick = (e) => {
     var value = e.target.textContent;
     setCurrentPage(value);
     setOffset((value-1)*(perpage))
     console.log(value);

  }

  const SearchString = (e) => {
    
    var value = e.target.value.toLowerCase();
     setSearchs(value)
     let result = [];
     Data.filter((val)=>{
      if(value == ""){
        return val
      }
      else if(val.Title.toLowerCase().includes(value.toLowerCase())){
        result.push(val);
        return val;

      }
    })
     setFilteredData(result);
     if(filteredData.length != 0)
     {
       movies = filteredData;
     }
     
    // console.log(result);

  }

  
  
  //console.log(Data);

  return (
    <>
    <div className="searchbar"> <input type="text" onChange={SearchString} value={searchs}  placeholder = "Search by title...."></input></div>
     
    { filteredData.length>0 ?
      ( filteredData.map((movie) =>
      // <li>
      //     <ul>{movie.Awards}</ul>
      //     <ul>{movie.Actors}</ul> 
      //     <ul><img src={movie.Images[0]} /></ul>
      //     {/* <ul>{movie.Year}</ul>
      //     <ul>{movie.Ratings[0].Value}</ul> */}
  
      //     {/* <ul>{movie.title}</ul>
      //     <ul>{movie.id}</ul>
      //     <ul>{movie.userId}</ul>
      //     <ul>{movie.completed.toString}</ul> */}
      // </li>
  
     <div>
       <MovieCard Title = {movie.Title} Images = {movie.Images[0]}  Plot = {movie.Plot} Id = {movie.Id}/>
       
       
     </div>
     
    )):
    (
      movieList.slice(offset,offset+perpage).map((movie) =>
      
      // <li>
      //     <ul>{movie.Awards}</ul>
      //     <ul>{movie.Actors}</ul> 
      //     <ul><img src={movie.Images[0]} /></ul>
      //     {/* <ul>{movie.Year}</ul>
      //     <ul>{movie.Ratings[0].Value}</ul> */}
  
      //     {/* <ul>{movie.title}</ul>
      //     <ul>{movie.id}</ul>
      //     <ul>{movie.userId}</ul>
      //     <ul>{movie.completed.toString}</ul> */}
      // </li>
  
     <div>
       <MovieCard Title = {movie.Title} Images = {movie.Images[0]}  Plot = {movie.Plot} Id = {movie.Id}/>
       
       
     </div>
     
    )
    )
    }
    
   <div><Pagination count={pages}  color="primary" onClick={handleClick} hidePrevButton hideNextButton  /></div>
    </>
  );

  }

 export default FetchMovie;