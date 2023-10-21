import {createSlice} from '@reduxjs/toolkit';

const initalState = {
  isLoggedIn: false,
  uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        ...{isLoggedIn: true},
        ...action.payload,
      };
    },
    resetToInitalState: () => {
      return initalState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {logIn, resetToInitalState, updateToken} = User.actions;

export default User.reducer;
