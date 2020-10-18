import React, { Component } from 'react';


class ShoppingCart extends Component {
    componentDidMount(){
        console.log('Shopping Cart')
        this.addtoCart();
    }
    // addtoCart = () => {
    //     this.props.dispatch({
    //         type: 'SEND_SNEAKER'
    //     })
    // }

    render() {
        return(
            <div>
                <h1>Shopping Cart</h1>
            </div>
        )
    }
}

export default(ShoppingCart);