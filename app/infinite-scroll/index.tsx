import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';
import { FlatList, Image } from 'react-native';

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
          <ListItem number={item} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;


interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {

  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={
        {
          height: 250,
          width: "100%"
        }
      }
    />
  )
}