import React from 'react';
import {Card, Button} from "react-bootstrap";


class PreviousOrdersPage extends React.Component{

    state = {
        user: {}
    }

    componentDidMount(){
        fetch("/api/orders/")
        .then(res => res.json())
        .then(user => {
            this.setState({
                user
            });
            console.log(this.state.user);
        })
        .catch(err => console.log("API ERROR: ", err));
    }

    // convert to prop later 
    // using array dummy data 
    cardInfo =
    [
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg", 
            store: "Tina's Laundromat & Dry Cleaners", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices efficitur augue, quis ultricies odio pharetra in."
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg", 
            store: "Grand Laundromat", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices efficitur augue, quis ultricies odio pharetra in."
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg", 
            store: "Clean Cycle Laundromat", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices efficitur augue, quis ultricies odio pharetra in."
        },
    ];

    renderCard = (card, index) => {
        return (
            <div class="card-deck mt-5">
            <Card style={{width:"400px" }} key={index}>
            <Card.Img variant="top"  src={card.image} />
            <Card.Body>
                <Card.Title>{card.store}</Card.Title>
                {/* <Card.Text>
                {card.description}
                </Card.Text> */}
                <Button variant="primary">Reorder</Button>
            </Card.Body>
            </Card>
            </div>
        );
    };

    render () {
        return (
            <div>
                <h3>Orders</h3>
                <h6>Previous Orders</h6>
                    {cardInfo.map(renderCard)}
            </div>
        )
    }
    
}




export default PreviousOrdersPage;