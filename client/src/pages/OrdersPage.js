import React from 'react';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


function OrdersPage(props){

    const cardInfo = 
    [
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Store-1",
            distance: "0.5 mile"
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Store-2",
            distance: "1 mile"
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Store-3",
            distance: "2.4 mile"
        },
    ];

    const renderCard = (card, index) => {
        return (
        
            <div class="card-deck">
            <Card style={{width:"400px" }} key={index} >
            <Card.Img variant="top"  src={card.image} />
            <Card.Body>
                <Card.Title>{card.store}</Card.Title>
                <Card.Text>
                {card.description}
                </Card.Text>
                <Card.Text>
                {card.distance}
                </Card.Text>
                <Card.Text>
                <Link exact to="/orders">
                <Button variant="primary">Order</Button>
                </Link>
                
                </Card.Text>
                
            </Card.Body>
            </Card>
            </div>
        
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default OrdersPage;