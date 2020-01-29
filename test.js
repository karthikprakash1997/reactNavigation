import {View,Text,Button} from 'react-native';
import  React, {Component} from 'react';



class Test extends Component {

render(){
    return (
        <View>
            <Text>test</Text>
            <Button onPress={() => this.props.navigation.navigate('Home')} title="HOME"></Button>
        </View>
    )
}}
export default Test