import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SneakerItem from '../SneakerItem/SneakerItem'


class ShoppingCart extends Component {
    componentDidMount(){
        console.log('Shopping Cart')
        this.getCart();
        this.sneakerinfo();
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
    sneakerinfo = () => {
        console.log('getting sneakers info like size, brand, name .etcccc')
        this.props.dispatch({
            type: 'SNEAKER_INFO',
            payload: this.props.store.getCart
        })
    }
    render() {
        console.log(this.props.store)
        return(
            <div>
                <h1>Shopping Cart</h1>
                {/* {JSON.stringify(this.props.store.getCart)} */}
                {this.props.store.getCart.map( cart => 
                <div>{console.log("======>", this.props.store.getCart.cart)}

                {/* {this.props.store.cart.map((sneaker) => (
              <SneakerItem sneaker={sneaker} key={sneaker.id} />
            ))} */}

                <p>{cart.sneaker_id}</p>
                <p>{cart.brand}</p>
                </div>
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