import ThemedView from '@/presentation/shared/themed-view';
import { Link } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link
        asChild
        href="/modal/modal-window"
        className='mx-4 bg-dark-primary text-center py-4 rounded-xl mt-10'>
        <Text className='text-3xl text-light-text dark:text-dark-text'>Open Modal</Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
