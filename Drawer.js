import {View,Text,Button} from 'react-native';
import  React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import Home from './test1';
import Test from './test'

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home
    },
    
},{
    drawerWidth: 300
});
export default createAppContainer(DrawerNavigator);
