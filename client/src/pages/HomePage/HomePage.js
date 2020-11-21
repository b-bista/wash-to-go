import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'

export default function HomePage() {
    return (
        
        <Jumbotron>
            <h1>Hello there!</h1>
            <p>
                Click below to begin finding partnered laundromats near you at a pricepoint you prefer.
            </p>
            <p>
                <Button variant="primary">Find Laundromats</Button>
            </p>
        </Jumbotron>
    
    )
}
