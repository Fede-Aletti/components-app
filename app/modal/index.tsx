import ThemedButton from '@/presentation/shared/themed-button';
import ThemedView from '@/presentation/shared/themed-view';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView className='gap-4'>
      <Link
        asChild
        href="/modal/modal-window"
        className='mx-4 bg-dark-primary text-center py-4 rounded-xl mt-10'>
        <Text className='text-3xl text-light-text dark:text-dark-text'>Open Modal</Text>
      </Link>


      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className='mx-4'
      >
        Open modal 2
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
