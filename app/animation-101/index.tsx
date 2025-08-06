import { useAnimation } from '@/hooks/use-animation';
import ThemedButton from '@/presentation/shared/themed-button';
import ThemedView from '@/presentation/shared/themed-view';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {  

  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPostition } = useAnimation();

  return (
    <ThemedView margin className='items-center justify-center flex-1'>
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />


      <ThemedButton className='my-5' onPress={() => {
        fadeIn({
          duration: 1000,
          toValue: 1,
        });
        startMovingTopPostition({
          initialPosition: -100,
          duration: 1000,
          toValue: 0,
          easing: Easing.bounce,
        });
        }}>FadeIn</ThemedButton>


      <ThemedButton className='mb-5' onPress={() => {
        fadeOut({
          duration: 1000,
        });
        startMovingTopPostition({
          initialPosition: 0,
          duration: 1000,
          toValue: -100,
          easing: Easing.linear,
        });
      }}>FadeOut</ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
