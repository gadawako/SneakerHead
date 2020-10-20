const sneakerInfoReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INFO':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:

  export default sneakerInfoReducer;