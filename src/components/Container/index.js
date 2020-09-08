import React from 'react';
import { View } from './styled';
const Container = ({children})=>{
    return(
        <View>
            {children}
        </View>
    );
}

export default Container;