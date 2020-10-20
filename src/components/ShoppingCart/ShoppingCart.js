import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ShoppingCart extends Component {
    componentDidMount(){
        console.log('Shopping Cart')
        this.getCart();
    }
    boughtSneakers = () => {
        alert('Sneakers have been bought!')
    }
    getCart = () => {
        console.log('getting cart')
        this.props.dispatch({
            type: 'SEND_SNEAKER_TO_CART',
        })
    }
    render() {
        console.log(this.props.store)
        return(
            <div>
                <h1>Shopping Cart</h1>
                {this.props.store.getCart.map( cart => 
                <p>{cart.id}</p>
                    )}
                <p>List of sneakers to buy</p>
                <ul>
                    <li></li>
                </ul>
                <button onClick={()=>this.boughtSneakers()}>Purchase</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShoppingCart);