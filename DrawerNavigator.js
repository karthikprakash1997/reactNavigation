import { createDrawerNavigator } from 'react-navigation-drawer';


import HomeScreen from './Home'
import Tab1 from './test1'

createDrawerNavigator({
    Home: HomeScreen,
    Tab1: Tab1,
  });

export default createDrawerNavigator