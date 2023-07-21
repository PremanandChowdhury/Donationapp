import {createSlice} from '@reduxjs/toolkit';

const initalState = {
  firstName: 'Jai Sia',
  lastName: 'Ram',
  id: 1,
  uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    updateUserFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitalState: () => {
      return initalState;
    },
  },
});

export const {updateUserFirstName, resetToInitalState} = User.actions;

export default User.reducer;
