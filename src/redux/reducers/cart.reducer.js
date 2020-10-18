const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:
 
  export default cartReducer;