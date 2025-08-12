import ThemedView from '@/presentation/shared/themed-view'
import React from 'react'
import { Text } from 'react-native'

const ModalWindow = () => {
    return (
        <ThemedView
            className='justify-center items-center flex-1'
            bgColor='#A52182'
        >
            <Text>ModalWindow</Text>
        </ThemedView>
    )
}

export default ModalWindow