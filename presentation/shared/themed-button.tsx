import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'


interface ThemedButtonProps extends PressableProps {
    className?: string
    children: string
}

const ThemedButton = ({ className, children, ...rest }: ThemedButtonProps) => {
    return (
        <Pressable
            className={`bg-light-primary dark:bg-dark-primary rounded-xl items-center px-6 py-2 active:opacity-80 ${className}`}
            {...rest}
        >
            <Text className='text-white text-2xl'>{children}</Text>
        </Pressable>
    )
}

export default ThemedButton