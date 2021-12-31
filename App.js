import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import feed from './assets/data/feed';
import 'react-native-gesture-handler'
import Router from './navigation/Router';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, useDispatch } from 'react-redux'
import { historyListReducer, historyRating } from './reducers/historyReducer';
import { userChangePasswordReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { SignOutScreen } from './screens/Signout';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotScreen from './screens/ForgotScreen';
import { AsyncStorage } from 'react-native';

const reducer = combineReducers({
  historiesList: historyListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userChangePassword: userChangePasswordReducer,
  historyRating: historyRating
})

const initialState = {
  userLogin: { loading: false, userInfo: null }
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content'></StatusBar>
      {/* <Home></Home> */}
      {/* <Post post={post1}></Post> */}
      {/* <SearchResultScreen></SearchResultScreen> */}
      {/* <DestinationSearch></DestinationSearch> */}
      {/* <GuestsScreen></GuestsScreen> */}
      <Router></Router>
      {/* <SplashScreen></SplashScreen> */}
      {/* <SignInScreen></SignInScreen> */}
      {/* <SignUpScreen></SignUpScreen> */}
      {/* <Rating gain={2} sz={40}></Rating> */}
      {/* <DatePicker></DatePicker> */}
      {/* <DetailDetectionScreen></DetailDetectionScreen> */}
      {/* <SafeAreaProvider>
        <SignOutScreen></SignOutScreen>
      </SafeAreaProvider> */}
      {/* <ForgotScreen></ForgotScreen> */}

    </Provider>
  );
}

