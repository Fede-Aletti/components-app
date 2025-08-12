import { useAnimation } from '@/hooks/use-animation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpacity, fadeIn } = useAnimation();

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            {isLoading && <ActivityIndicator />}
            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
                onLoadEnd={() => {
                    setIsLoading(false);
                    fadeIn({});
                }}
            />
        </View>
    )
}

export default FadeInImage