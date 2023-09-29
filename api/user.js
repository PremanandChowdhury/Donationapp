import auth from '@react-native-firebase/auth';

export const createUser =  async (fullName, email, password)  => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile({
            displayName: fullName
        })
        console.log('Prem: user Info', user)
    } catch (e) {
        if(e.code === 'auth/email-already-in-use') {
            return {
                error : true,
                message: 'Entered email is already in use! 🥲'
            }
        } else if(e.code === 'auth/invalid-email') {
            return {
                error : true,
                message: 'Entered email is invalid 😬'
            }
        } else {
            return {
                error: true,
                message: 'Something went wrong with your request....'
            }
        }
    }
}