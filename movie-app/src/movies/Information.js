import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import './Information.css'


const Information = (props) => {

    let userId  = useParams(); //Dynamic routing

    console.log(userId)
    const location = useLocation()
    const { from } = location.state

    return(
        <div>
            {/* <h1>{userId.Id}</h1> */}
            <h1>{from.title}</h1>
           <div className="image"> <img src={from.image1} alt="image" style={{height: "100px"}}/></div>
            <h1>{from.plot}</h1>
        </div>
    )
}

export default Information;