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
                <p>Sneaker List on the way</p>
                {this.props.store.sneakers.map(sneaker => 
                <li>{sneaker.Brand} {sneaker.Name} {sneaker.Size} {sneaker.Condition} </li>
                )}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ShopForSneaker);