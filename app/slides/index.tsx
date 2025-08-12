import ThemedButton from '@/presentation/shared/themed-button';
import ThemedText from '@/presentation/shared/themed-text';
import ThemedView from '@/presentation/shared/themed-view';
import { FlatList, Image, ImageSourcePropType, useWindowDimensions } from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {

  
  return (
    <ThemedView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        horizontal
        pagingEnabled

      />

      <ThemedButton 
        className='absolute bottom-10 right-5 w-[150px]'
        onPress={() => {
          // Handle next button press
        }}
      >
        Next
      </ThemedButton>
      <ThemedButton 
        className='absolute bottom-10 right-5 w-[150px]'
        onPress={() => {
          // Handle next button press
        }}
      >
        Finalizar
      </ThemedButton>
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView
      style={{
        width: screenWidth,
        height: screenHeight * 0.7,
      }}
      className='flex-1 rounded p-10 justify-center bg-red-500'>
      <Image
        source={img}
        style={{
          width: screenWidth * 0.7,
          height: screenHeight * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <ThemedText
        type='h1'
        className='text-light-primary dark:text-dark-primary'
      >{title}</ThemedText>
      <ThemedText
        className='mt-10'
      >{desc}</ThemedText>
    </ThemedView>
  )
}