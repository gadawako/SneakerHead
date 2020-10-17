import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ShopForSneaker extends Component {
    componentDidMount(){
        console.log('Sneakers list')
        this.getSneakers(); 
    }
     // Starts FETCH_SNEAKERS saga to initiate database GET call for sneaker list
    getSneakers = () => {
        this.props.dispatch({
            type: 'FETCH_SNEAKERS'
        })
    }
    render() {
        console.log(this.props.store.sneakers)
        return(
            <div>
                <h1>Shopping For Sneakers</h1>
                {this.props.store.sneakers.map(sneaker => 
                <li>{sneaker.Brand} {sneaker.Name} Size: {sneaker.Size} Condition: {sneaker.Condition}
                 <button>Like</button> <button>Add to Cart</button>
                 <label for="Size">Size?</label>
  <select name="cars" id="cars">
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
  </select>
                  </li>
                )}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShopForSneaker);