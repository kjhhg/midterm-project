import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Forum = ({ article }) => {
    const { title, content, url } = article;
    const { box } = styles;

    return (
        <Card>
            <CardSection>
                <TouchableOpacity
                    style = {box}
                    onPress = {() => Linking.openURL(url)}
                >
                    <Text>{title}</Text>
                    <Text>{content}</Text>
                </TouchableOpacity>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10,
    },
})

export default Forum;