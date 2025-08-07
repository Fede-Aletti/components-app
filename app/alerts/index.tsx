import ThemedButton from '@/presentation/shared/themed-button';
import ThemedView from '@/presentation/shared/themed-view';
import { Alert } from 'react-native';

const AlertsScreen = () => {

  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  };

  const createThreeButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Maybe', onPress: () => console.log('Maybe Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  };


  return (
    <ThemedView margin className='flex-1 items-center justify-center gap-2'>
      <ThemedButton onPress={createTwoButtonAlert}>Show two button alert</ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert}>Show three button alert</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
