const sneakersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SNEAKERS':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:

  export default sneakersReducer;