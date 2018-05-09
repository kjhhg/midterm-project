import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DiningScreen extends Component{
    static navigationOptions = {
        title: 'Dining',
    };

    render() {
        const { container, box } = styles;
        return(
            <View style = {container}>
                <Text style = {box}>善食堂</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {box}>‧‧‧‧‧‧</Text>
                <Text style = {{fontSize: 15}}>MORE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        width: 300,
        margin: 9,
        padding: 10,
        backgroundColor: 'lightgrey',
        fontSize: 15,
        textAlign: 'left',
    }
})

export default DiningScreen;