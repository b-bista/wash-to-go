import React from 'react';
import {Card, Button, Jumbotron} from "react-bootstrap";
import laundry1 from "./../Generic-Laundromat-Pics/laundry1.png"
import laundry2 from "./../Generic-Laundromat-Pics/laundry2.png"
import laundry3 from "./../Generic-Laundromat-Pics/laundry3.png"
import { Link } from 'react-router-dom';


function PreviousOrdersPage(props){


    // convert to prop later 
    // using array dummy data 
    const cardInfo =
    [
        {
            image: laundry1, 
            store: "Tina's Laundromat & Dry Cleaners", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices efficitur augue, quis ultricies odio pharetra in."
        },
        {
            image: laundry2, 
            store: "Grand Laundromat", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices efficitur augue, quis ultricies odio pharetra in."
        },
        {
            image: laundry3, 
            store: "Clean Cycle Laundromat", 
        },
    ];

    const renderCard = (card, index) => {
        return (
            <div class="card-deck mt-5">
            <Card style={{width:"400px" }} key={index}>
            <Card.Img variant="top"  src={card.image} />
            <Card.Body>
                <Card.Title>{card.store}</Card.Title>

                <Link to="/order">
                <Button variant="primary">Reorder</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
        );
    };

    return (
        <div>
            <h3>Orders</h3>
            <h6>Previous Orders</h6>
                {cardInfo.map(renderCard)}
        </div>
    )
}




export default PreviousOrdersPage;