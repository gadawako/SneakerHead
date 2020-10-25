const deleteReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_DELETE':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:
 
  export default deleteReducer;