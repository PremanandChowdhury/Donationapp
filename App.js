import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // App State changing from background to foreground
          console.log('WELCOME TO THE DONATION APP!!');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );

    checkToken();

    console.log('APPLICATION HAS RENDERED');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
