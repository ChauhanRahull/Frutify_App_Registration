import React from 'react';
import { View } from 'react-native';

const Dash = ({ width = '100%', height = 1, color = 'black' }) => {
    return (
        <View
            style={{
                width,
                height,
                borderStyle: 'dashed',
                borderBottomWidth: height,
                borderBottomColor: color,
            }}
        />
    );
};

export default Dash;
