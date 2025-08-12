import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/themed-text';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor({
    dark: 'black',
    light: 'white'
  }, 'background')
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, '#9Bd35A', '#689F38']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>
          Pull to refresh the content
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
};


export default PullToRefreshScreen;
