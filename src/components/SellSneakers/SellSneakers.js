import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class SellSneakers extends Component {

    // state is holding the value of each property
    state = {
        brand: '',
        Name: '',
        Size: null,
        Condition: ''
    }

    updateBrand = (event) => {
        event.preventDefault()
        this.setState({
            brand: event.target.value
        })
        console.log(this.state)
    }
    updateName = (event) => {
        event.preventDefault()
        this.setState({
            Name: event.target.value
        })
        console.log(this.state)
    }
    updateSize = (event) => {
        event.preventDefault()
        this.setState({
            Size: event.target.value
        })
        console.log(this.state)
    }
    updateCondition = (event) => {
        event.preventDefault()
        this.setState({
            Condition: event.target.value
        })
        console.log(this.state)
    }

    handleAddKicks = (event) => {
        event.preventDefault()
        this.props.dispatch({})
    }

    componentDidMount(){
        // this.sellSneakers();
    }
    addSneakers = () => {
        console.log('add sneakers')
        alert('Thank you for adding to the Sneaker World!')
        this.props.dispatch({
            type: 'ADD_SNEAKERS',
            payload: this.state
        })
        this.setState({
            brand: '',
            Name: '',
            Size: '',
            Condition: ''
        })
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <h2>Sell Sneakers</h2>
                <input placeholder="Brand?"
                value={this.state.brand} onChange={this.updateBrand}
                ></input>
                <br></br>
                <input placeholder="Name of Sneakers"
                value={this.state.Name} onChange={this.updateName}
                ></input>
                <br></br>
                <input placeholder="Size?"
                value={this.state.Size} onChange={this.updateSize}></input>
                <br></br>
                <input placeholder="Condition"
                value={this.state.Condition} onChange={this.updateCondition}></input>
                    <br></br>
                <button onClick={()=>this.addSneakers()}>Add Sneaker</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SellSneakers);