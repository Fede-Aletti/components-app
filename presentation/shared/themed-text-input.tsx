import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
    className?: string
}

const ThemedTextInput = ({ className, ...props }: Props) => {
    return (
        <TextInput
            className={`py-4 px-2 text-black dark:text-white ${className}`}
            placeholderTextColor='gray'
            {...props}
        />
    )
}

export default ThemedTextInput