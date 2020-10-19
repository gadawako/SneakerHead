import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class SellSneakers extends Component {
    componentDidMount(){
        this.sellSneakers();
    }
    sellSneakers = () => {
        console.log('selling sneakers')
        this.props.dispatch({
            type: 'ADD_SNEAKERS',
            
        })
    }

    render() {
        return(
            <div>
                <h2>Sell Sneakers</h2>
                <input placeholder="Brand?"></input>
                <br></br>
                <input placeholder="Name of Sneakers"></input>
                <br></br>
                <input placeholder="Size?"></input>
                <br></br>
                <label for="Size">Size?</label>
                    <select name="Size" id="Size">
                        <option></option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                    <br></br>
                <button>Sell Sneaker</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SellSneakers);