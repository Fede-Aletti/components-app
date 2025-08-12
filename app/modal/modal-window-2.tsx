import ThemedButton from '@/presentation/shared/themed-button'
import ThemedView from '@/presentation/shared/themed-view'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, Text } from 'react-native'


const ModalWindow = () => {
    return (
        <ThemedView
            className='justify-center items-center flex-1'
        >
            <Text>Another ModalWindow</Text>


            <ThemedButton
                onPress={() => router.dismiss()}
                className='mx-4'
            >
                Close
            </ThemedButton>

            <StatusBar style={
                Platform.OS === 'ios' ? 'light' : 'auto'
            } />
        </ThemedView>
    )
}

export default ModalWindow