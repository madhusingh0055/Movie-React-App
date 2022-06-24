import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./Data";
import Card from './demo1';
import RecipeReviewCard from "./MovieCard";
import Information from "./Information";



const FetchMovie = () => {
  
    const[movieList, setMovieList]  = useState([]);

    

    // var movies = [];

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
    var count = 1;
    async function fetchMovie()
    {
      for(var i=0;i<Data.length;i++)
      {
        Data[i]["Id"] = i;
      }
      //  Data["Id"] = count;
       setMovieList(Data);
      //  count++;
    }
      
      console.log(typeof(lists));
      useEffect(() => {
        fetchMovie()
      }, [])

     
  console.log(movieList);
  //console.log(Data);

  return (
    <>
    {
        movieList.map((movie) =>
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
         <RecipeReviewCard Title = {movie.Title} Images = {movie.Images[0]}  Plot = {movie.Plot} Id = {movie.Id}/>
         
         
       </div>
       
    )}
   
    </>
  );

  }

 export default FetchMovie;