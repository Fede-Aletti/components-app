import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const primaryColor = useThemeColor({}, 'primary')
  const [isLoading, setIsLoading] = useState(false)
  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setIsLoading(true);
    setTimeout(() => {
      setNumbers(() => [...numbers, ...newArray]);
      setIsLoading(false);
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
        ListFooterComponent={() => (
          isLoading ? <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View> : null
        )}
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