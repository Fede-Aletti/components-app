import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;


    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { }
    }) => {
        // Trigger
        Animated.timing(animatedOpacity, {
            toValue,
            duration,
            useNativeDriver,
            easing,
        }).start(callback);


    };

    const fadeOut = ({
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => { // Trigger
        Animated.timing(animatedOpacity, { // Definition
            toValue,
            duration,
            useNativeDriver,
            easing,
        }).start( // Callbacks for the animations end 
            callback
        ); // Start the animation
    };

    const startMovingTopPostition = ({
        initialPosition = -100,
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { }
    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue,
            duration,
            useNativeDriver,
            easing,
        }).start();
    }



    return {
        // Values
        animatedTop,
        animatedOpacity,

        // Methods
        fadeIn,
        fadeOut,
        startMovingTopPostition,
    }
}
