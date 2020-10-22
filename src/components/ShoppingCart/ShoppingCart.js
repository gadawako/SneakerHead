import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SneakerItem from '../SneakerItem/SneakerItem'


class ShoppingCart extends Component {
    componentDidMount(){
        console.log('Shopping Cart')
        this.getCart();
        // this.sneakerinfo();
    }
    boughtSneakers = () => {
        alert('Sneakers have been bought!')
    }
    getCart = () => {
        console.log('getting cart')
        this.props.dispatch({
            type: 'SEND_SNEAKER_TO_CART',
            payload: {userId: this.props.store.user.id}
        })
    }
    // sneakerinfo = () => {
    //     console.log('getting sneakers info like size, brand, name .etcccc')
    //     this.props.dispatch({
    //         type: 'SNEAKER_INFO',
    //         payload: this.props.store.getCart
    //     })
    // }
    render() {
        console.log(this.props.store.getCart)
        return(
            <div>
                <h1>Shopping Cart</h1>
                
                {this.props.store.getCart.map( cart => 
                <div>
                <div>{cart.Brand}    
                   {cart.Name}
                   Size:{cart.Size}
                  Condition{cart.Condition}
                  <button >DELETE</button></div>
                </div>
                    )}
                
                <button onClick={()=>this.boughtSneakers()}>Purchase</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShoppingCart);