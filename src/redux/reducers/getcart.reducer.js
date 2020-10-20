const getCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_CART':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:

  export default getCartReducer;