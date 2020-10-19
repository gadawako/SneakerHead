import React, { Component } from 'react';


class ShoppingCart extends Component {
    componentDidMount(){
        console.log('Shopping Cart')
        
    }
    boughtSneakers = () => {
        console.log('sneakrs have been bought')
        alert('Buying sneakers')
    }

    render() {
        return(
            <div>
                <h1>Shopping Cart</h1>
                <p>List of sneakers to buy</p>
                <ul>
                    <li></li>
                </ul>
                <button onClick={()=>this.boughtSneakers()}>Purchase</button>
            </div>
        )
    }
}

export default(ShoppingCart);