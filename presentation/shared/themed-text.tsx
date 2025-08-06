import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface ThemedTextProps extends TextProps {
    className?: string;
    type?: 'normal' | 'h1' | 'h2' | 'semibold' | 'link';
}

const ThemedText = ({ className, type, ...props }: ThemedTextProps) => {
    const textColor = useThemeColor({}, 'text');

    return (
        <Text
            style={[
                { color: textColor },
                type === 'h1' && { fontSize: 24, fontWeight: 'bold' },
                type === 'h2' && { fontSize: 20, fontWeight: 'bold' },
                type === 'semibold' && { fontWeight: '600' },
                type === 'link' && { color: textColor, textDecorationLine: 'underline' },
            ]}
            className={[
                'text-light-text dark:text-dark-text',
                type === 'normal' && 'font-normal',
                type === 'h1' && 'font-bold text-3xl',
                type === 'h2' && 'font-bold text-2xl',
                type === 'semibold' && 'font-semibold',
                type === 'link' && 'font-normal underline',
                className,
            ].join(' ')}
            {...props}
        />
    )
}

export default ThemedText;