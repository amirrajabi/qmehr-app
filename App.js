import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/indexScreen';
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Search: SearchScreen,
    Business: BusinessScreen
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "QMehr"
    }
});

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>;
}