import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import './Card.css'
import { Link, useParams } from 'react-router-dom';
import Information from './Information';




export default function RecipeReviewCard(props) {


  var num = props.Id;
  var links = "/Information/"+ num;
  var title = props.Title;
  var plot = props.Plot;
  var image1 = props.Images;


  return (
    <div className='card-container'> 
    <Card sx={{ maxWidth: 345 }} className="movie-card">
      <CardHeader
        title={props.Title}
      />
      <CardMedia
        component="img"
        height="200"
        image={props.Images}
        alt="Paella dish"
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <Link to={links}>Read More</Link> */}
        <Link to={links}  state={{ from: {title,plot,image1} }}>
  Next Step
</Link>
        
      </CardActions>
    </Card>
    </div>
  );
}
