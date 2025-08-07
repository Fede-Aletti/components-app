import { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

const Animation102Screen = () => {

  const panGesture = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: panGesture.x,
        dy: panGesture.y
      }
    ], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(panGesture, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[panGesture.getLayout(), styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#61DAFB',
    borderRadius: 10,
  },
});

export default Animation102Screen;
