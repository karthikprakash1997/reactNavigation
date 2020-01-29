
import { createAppContainer } from 'react-navigation';
import Home from './test1';
import Test from './test';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import Tab1 from './Tab1';
import Tab2 from './Tab2'

const TabNavigator = createBottomTabNavigator({
   Home:Home,
   Tab2:Test  
});

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home
    },
    Test:{
        screen:Test
    },
    
    
},{
    drawerWidth: 300
});
export default createAppContainer(DrawerNavigator,TabNavigator);
//export default createAppContainer(TabNavigator,DrawerNavigator);
