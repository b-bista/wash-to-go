import React from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TheMap from "../components/GoogleMap";
import "../components/marker.css";

class OrdersPage extends React.Component {

    state = {
        stores: []
    }

    componentDidMount() {
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

                <Card style={{ width: "400px" }} key={index} >
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                            {`${card.address1}, ${card.address2}`}
                        </Card.Text>
                        <Card.Text>
                            {`${card.city}, ${card.state}, ${card.zipCode}`}
                        </Card.Text>
                        <Card.Text>
                            {Math.random().toPrecision(2)} miles away
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

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto">{this.state.stores && this.state.stores.map(this.renderCard)}</Col>
                    <Col> <TheMap /> </Col>
                </Row>
            </Container>
        );
    }

}

export default OrdersPage;