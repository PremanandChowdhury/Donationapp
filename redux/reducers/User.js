import {createSlice} from '@reduxjs/toolkit';

const initalState = {
  firstName: 'Purusottam',
  lastName: 'Ram',
  id: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    updateUserFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateUserFirstName} = User.actions;

export default User.reducer;
