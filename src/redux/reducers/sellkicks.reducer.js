const sellReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SELL':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:

  export default sellReducer;
