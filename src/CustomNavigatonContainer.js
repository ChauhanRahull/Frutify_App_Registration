import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const CustomNavigationContainer  = (props) => {
    return(
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};
export default CustomNavigationContainer;
