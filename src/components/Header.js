import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textstyle, viewstyle } = styles;

    return (
        <View style = {viewstyle}>
            <Text style = {textstyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewstyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
    },
    textstyle: {
        fontsize: 20,
    }
};

export default Header;