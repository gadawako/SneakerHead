import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ShopForSneaker extends Component {

    // state ={
    //     size: '',
    // }
    componentDidMount(){
        this.getSneakers(); 
    }
     // Starts FETCH_SNEAKERS saga to initiate database GET call for sneaker list
    getSneakers = () => {
        this.props.dispatch({
            type: 'FETCH_SNEAKERS'
        })
    }
    addLike = () => {
        console.log('addLike')
    }

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
                {this.props.store.sneakers.map(sneaker => 
                <li>{sneaker.Brand} {sneaker.Name} Size: {sneaker.Size} Condition: {sneaker.Condition}
                 {/* <button onClick={()=>this.addLike(sneaker)}>Like</button>  */}
                 <button onClick={()=>this.addToCart(sneaker.id, this.props.store.user.id)}>Add to Cart</button>
                 {/* <label for="Size">Size?</label>
                    <select name="Size" id="Size">
                        <option></option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select> */}
                  </li>
                )}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShopForSneaker);