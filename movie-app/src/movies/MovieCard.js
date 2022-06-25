import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './Card.css'
import { Link, useParams } from 'react-router-dom';
import Information from './Information';




export default function MovieCard(props) {


  var num = props.Id;
  var links = "/Movie/"+ num;
  var title = props.Title;
  var plot = props.Plot;
  var image1 = props.Poster;
  var year = props.Year;
  var imdb = props.imdbRating;
  var release = props.Released;
  var Runtime = props.Runtime;
  var Genre = props.Genre;
  var Actors = props.Actors;

  console.log(image1)

  return (
    <div className='card-container'> 
    <Card sx={{ maxWidth: 345 }} className="movie-card">
      {/* <CardHeader className='header'
        title={props.Title}
      /> */}
      <CardMedia
        component="img"
        height="320"
        image={image1}
        alt="images"
      />
     
      <CardActions className='card-footer'>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <Link to={links}>Read More</Link> */}
        <Link to={links}  state={{ from: {title,plot,image1,year,imdb,release,Runtime,Genre,Actors} }} className="link">{title}</Link>
        
      </CardActions>
    </Card>
    </div>
  );
}
