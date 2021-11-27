import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';
import Home from './screens/Home'
import feed from './assets/data/feed';
import SearchResultScreen from './screens/SearchResult';
import DestinationSearch from './screens/DestinationSearch';
import GuestsScreen from './screens/Guests';
import 'react-native-gesture-handler'
import Router from './navigation/Router';
import EditProfileScreen from './screens/EditProfileScreen';
import SplashScreen from './screens/Splash';
export default function App() {
  const post1 = feed[0]
  return (
    <>
      <StatusBar barStyle='dark-content'></StatusBar>
      {/* <Home></Home> */}
      {/* <Post post={post1}></Post> */}
      {/* <SearchResultScreen></SearchResultScreen> */}
      {/* <DestinationSearch></DestinationSearch> */}
      {/* <GuestsScreen></GuestsScreen> */}
      {/* <Router></Router> */}
      {/* <EditProfileScreen></EditProfileScreen> */}
      <SplashScreen></SplashScreen>

    </>
  );
}

