
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Test from './test'
import Test1 from './test1'
import Home from './Home'
//import DrawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer'
const TabNavigator = createBottomTabNavigator({
   Test:Test,
   Test1:Test1
});
export default createAppContainer(TabNavigator);

