import ThemedText from '@/presentation/shared/themed-text';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';
import { FlatList } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers(() => [...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => (
          <ThemedText className='h-[250px]'>
            {item}
          </ThemedText>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
