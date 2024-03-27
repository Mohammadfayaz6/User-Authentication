const initialState = {
  users: [],
  isLoggedIn: false,
  currentUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      const newUser = action.payload;
      const updatedUsers = [...state.users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers
      };

    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true
      };

    case "LOGOUT":
      localStorage.removeItem('users'); // Clear user data from local storage
      return {
        ...state,
        users: [],
        isLoggedIn: false,
        currentUser: null
      };

    default:
      return state;
  }
};

export default reducer;
