import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({ children, className, margin, safe, bgColor, style }: ThemedViewProps) => {
    const backgroundColor = bgColor ?? useThemeColor({}, 'background');
    const safeArea = useSafeAreaInsets();

    return (
        <View style={[
            {
                backgroundColor,
                marginHorizontal: margin ? safeArea.left : 0,
                paddingTop: safe ? safeArea.top : 0,
                flex: 1,
            },
            style
        ]}
            className={className}
        >
            {children}
        </View>
    )
}

export default ThemedView