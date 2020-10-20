import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class SneakerItem extends Component {
    render() {
        return(
            <div>
                <h2>Each Sneaker</h2>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SneakerItem);