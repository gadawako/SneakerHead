import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ShopForSneaker extends Component {
    componentDidMount(){
        this.getSneakers(); 
    }
     // Starts FETCH_SNEAKERS saga to initiate database GET call for sneaker list
    getSneakers = () => {
        this.props.dispatch({
            type: 'FETCH_SNEAKERS'
        })
    }
    // addLike = () => {
    //     console.log('addLike')
    // }

    addToCart = (sneakerId, userId) => {
        console.log(sneakerId,userId)
        this.props.dispatch({
            type: 'SEND_SNEAKER',
            payload:{sneakerId:sneakerId,userId:userId}
        })
    }
    render() {
        console.log(this.props.store.user.id)
        return(
            <div>
                <h1>Shopping For Sneakers</h1>
                {this.props.store.sneakers.map(sneaker =>{
                    console.log(sneaker)
                    if (sneaker.sold === false) {
                        return (<li>{sneaker.Brand} {sneaker.Name} Size: {sneaker.Size} Condition: {sneaker.Condition} 
                                <button onClick={()=>this.addToCart(sneaker.id, this.props.store.user.id)}>Add to Cart</button>
                                </li>) 
                    }
                }
                )}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShopForSneaker);