const initialState = {
  menus: [], 
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MENUS':
      return { 
        ...state, 
        menus: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;