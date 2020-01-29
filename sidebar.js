import React from 'react';
import {Container,Header,Content,Button,Text} from 'native-base';



export default sidebar =(props)=>{
    return(
        <Container>
            <Header>
                <Content>
                    <Button onPress={() => this.props.navigation.navigate('Test')}>
                        <Text>open</Text>
                    </Button>
                </Content>
            </Header>
        </Container>
    )
}
