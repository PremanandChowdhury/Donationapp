import {createSlice} from '@reduxjs/toolkit';

const initalState = {
  firstName: 'Premanand',
  lastName: 'Chowdhury',
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
