import React from 'react';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
// import GoogleMap from '../components/map';
// import SimpleMap from '../components/maps';
import TheMap from "../components/GoogleMap";
<<<<<<< Updated upstream
=======
import "./marker.css";
function OrdersPage(props){
>>>>>>> Stashed changes


class OrdersPage extends React.Component{

    state = {
        stores: []
    }

    componentDidMount(){
        fetch("/api/businesses/")
        .then(res => res.json())
        .then(businesses => {
            // businnesses.forEach(store => {
            //     store["long"] = "";
            //     store["lat"] = "";
            // });
            this.setState({
                stores: businesses
            });
        })
        .catch(err => console.log("API ERROR: ", err));
    }

    cardInfo = 
    [
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Tina's Laundromat & Dry Cleaners",
            distance: "0.5 mile"
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Grand Laundromat",
            distance: "1 mile"
        },
        {
            image: "https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg",
            store: "Clean Cycle Laundromat",
            distance: "2.4 mile"
        },
    ];
    

    renderCard = (card, index) => {
        const to = `/order/${card.id}`
        return (
            <div class="card-deck">
            
<<<<<<< Updated upstream
            <Card style={{width:"400px" }} key={index} >
            <Card.Img variant="top"  src='https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg' />
=======
            <Card style={{width:"400px", marginRight: '1400px'}} key={index} >
            <Card.Img variant="top"  src={card.image} />
>>>>>>> Stashed changes
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                {`${card.address1}, ${card.address2}`}
                </Card.Text>
                <Card.Text>
                {`${card.city}, ${card.state}, ${card.zipCode}`}
                </Card.Text>
                <Card.Text>
                    {Math.random().toPrecision(2)}
                </Card.Text>
                <Card.Text>
                <Link exact to={to}>
                <Button variant="primary">Order</Button>
                </Link>
                
                </Card.Text>
                
            </Card.Body>
            </Card>
            </div>
        );
    };

<<<<<<< Updated upstream
    render () {
        return (
            <div>
                {this.state.stores && this.state.stores.map(this.renderCard)}
                <TheMap/>
            </div>
        );
    }

=======
    return (
        <div>
            {cardInfo.map(renderCard)}
            <TheMap />
        </div>
    );
    
  
>>>>>>> Stashed changes
}

export default OrdersPage;