import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function HomePage() {
    return (
        
        <div class="text-center">
         <Jumbotron className="">
            <h1>Hello there!</h1>
            <p>
                Click below to begin finding partnered laundromats near you at a pricepoint you prefer.
            </p>
            <p>
                <Link exact to="/order">

                <Button variant="primary">Find Laundromats</Button>
                </Link>
            </p>
        </Jumbotron> 
        
        </div>
        
        
    
    )
}
