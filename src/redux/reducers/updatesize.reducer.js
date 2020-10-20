const updateSizeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SIZE':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:

  export default updateSizeReducer;