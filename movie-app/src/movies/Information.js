import React from "react";
import { useParams } from "react-router-dom";
import { useLocation , Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import './Information.css'
import Button from '@mui/material/Button';



const Information = (props) => {

    let userId = useParams(); //Dynamic routing

    console.log(userId)
    const location = useLocation()
    const { from } = location.state

    return (
        <div className="movie-information">
            {/* <h1>{userId.Id}</h1> */}
            <div className="heading"> <h1>{from.title}</h1> </div>
            <div className="image"> <img src={from.image1} alt="image" style={{}} /></div>
            <div className="plot">
                <h2>{from.plot}</h2>
                <h2>{from.year}</h2>
                <h2>{from.imdb}</h2>
                <h2>{from.release}</h2>
                <h2>{from.Runtime}</h2>
                <h2>{from.Genre}</h2>
                <h2>{from.Actors}</h2>
            </div>

          <div className="button">
          <Link to='/'><Button variant="contained" disableElevation>Back To Home Page</Button></Link>
          </div>

        </div>
    )
}

export default Information;