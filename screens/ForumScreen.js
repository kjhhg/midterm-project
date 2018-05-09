import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from '../src/components/Header';
import ForumList from '../src/components/ForumList';

class ForumScreen extends Component {
    static navigationOptions = {
        title: 'Forum',
    };

    render(){
        return(
            <View style = {{flex: 1}}>
                <Header headerText = {'News'} />
                <ForumList />
            </View>
        )
    }
}

export default ForumScreen;