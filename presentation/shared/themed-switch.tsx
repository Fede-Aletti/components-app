import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './themed-text';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ value, onValueChange, className, text }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex-row items-center justify-between mx-3 active:opacity-80 ${className}`}
        >
            {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                // className={className}
                thumbColor={isAndroid ? switchActiveColor : ''}
                trackColor={{
                    true: switchActiveColor,
                    false: 'gray'
                }}
            />
        </Pressable>
    )
}

export default ThemedSwitch