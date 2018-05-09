import React, { Component} from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ForumScreen from '../screens/ForumScreen'
import InfoScreen from '../screens/InfoScreen';
import DiningScreen from '../screens/DiningScreen';

const InfoStack = StackNavigator(
    {
        InfoScreen: {
            screen: InfoScreen,
        }
    }
);


const DiningStack = StackNavigator(
    {
        DiningScreen: {
            screen: DiningScreen,
        }
    }
);

const ForumStack = StackNavigator(
    {
        ForumScreen: {
            screen: ForumScreen,
        }
    }
);


export const TabRouter = TabNavigator(
    {
        Info: {
            screen: InfoStack,
        },
        Dining: {
            screen: DiningStack,
        },
        Forum: {
            screen: ForumStack,
        }
    },
    {
        animationEnabled: true,
    }
);
