import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

// Create a new User
export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({
      displayName: fullName,
    });
    return user;
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      return {
        error: true,
        message: 'Entered email is already in use! 🥲',
      };
    } else if (e.code === 'auth/invalid-email') {
      return {
        error: true,
        message: 'Entered email is invalid 😬',
      };
    } else {
      return {
        error: true,
        message: 'Something went wrong with your request....',
      };
    }
  }
};

// User Login
export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response?.user?.getIdToken();

    return {
      error: false,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (e) {
    if (e.code === 'auth/invalide-login') {
      return {
        error: true,
        message: 'Please enter a valid password 😬',
      };
    } else if (
      e.code === 'auth/user-not-found' ||
      e.code === 'auth/invalid-login'
    ) {
      return {
        error: true,
        message: 'Entered email does not exist ⚠️ Please create a new account.',
      };
    }
    return {
      error: true,
      message: 'Entered email/ password is incorrect! ',
    };
  }
};

// User Logout
export const logOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {}
};

// Refresh Token
export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken({forceRefresh: true});
    console.log('CHECK TOKEN RES', response);
    console.log('UPDATING TOkEN');
    store.dispatch(updateToken(response));

    return response;
  } catch (error) {
    return error;
  }
};
