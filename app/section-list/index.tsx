import ThemedCard from '@/presentation/shared/themed-card';
import ThemedText from '@/presentation/shared/themed-text';
import ThemedView from '@/presentation/shared/themed-view';
import { SectionList, View } from 'react-native';


interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)',
    ],
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)',
    ],
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)',
    ],
  },
];

// const accentByTitle: Record<string, string> = {
// 'DC Comics': 'bg-blue-500',
// 'Marvel Comics': 'bg-red-500',
// Anime: 'bg-purple-500',
// };

// const SectionListScreen = () => {
// const total = houses.reduce((acc, s) => acc + s.data.length, 0);

// return (
//   <ThemedView margin>
//     <ThemedCard className="p-0 overflow-hidden">
//       <SectionList
//         sections={houses}
//         keyExtractor={(item, index) => `${item}-${index}`}
//         stickySectionHeadersEnabled
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 16 }}
//         ListHeaderComponent={
//           <View className="px-4 pt-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
//             <Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
//               Characters
//             </Text>
//             <Text className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
//               {total} total across {houses.length} sections
//             </Text>
//           </View>
//         }
//         renderSectionHeader={({ section }) => (
//           <View className="px-4 pt-5 pb-2 bg-zinc-100/70 dark:bg-zinc-900/70">
//             <View className="flex-row items-center justify-between">
//               <Text className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
//                 {section.title}
//               </Text>
//               <Text className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
//                 {section.data.length}
//               </Text>
//             </View>
//           </View>
//         )}
//         renderItem={({ item, section }) => (
//           <View className="flex-row items-center gap-3 px-4 py-3">
//             <View
//               className={`h-2.5 w-2.5 rounded-full ${
//                 accentByTitle[section.title] ?? 'bg-emerald-500'
//               }`}
//             />
//             <Text className="flex-1 text-base text-zinc-900 dark:text-zinc-100">
//               {item}
//             </Text>
//           </View>
//         )}
//         ItemSeparatorComponent={() => (
//           <View className="h-px bg-zinc-200 dark:bg-zinc-800/80 ml-4" />
//         )}
//         SectionSeparatorComponent={() => (
//           <View className="h-px bg-zinc-300/60 dark:bg-zinc-700/60 my-2" />
//         )}
//         ListFooterComponent={<View className="h-4" />}
//       />
//     </ThemedCard>
//   </ThemedView>
// );
// };

const SectionListScreen = () => {
  return (
    <ThemedView margin>
      <ThemedCard className="p-0 overflow-hidden">
        <SectionList
          sections={houses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ThemedText className='px-4 mt-4'>
              {item}
            </ThemedText>
          )}
          ListHeaderComponent={() => (
            <ThemedText className="px-4 pt-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <ThemedText className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Characters
              </ThemedText>
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedView className="justify-between items-center flex-row px-4 border-b border-zinc-200 dark:border-zinc-800">
              <ThemedText className="text-3xl my-3 font-semibold text-zinc-800 dark:text-zinc-100">
                {section.title}
              </ThemedText>
              <ThemedText className="text-xs text-right font-medium text-zinc-500 dark:text-zinc-400">
                {section.data.length}
              </ThemedText>
            </ThemedView>
          )}

          ListFooterComponent={() => (
            <ThemedText type="h1"
              className='font-bold bg-light-background dark:bg-dark-background p-2 mb-10 rounded'>
              Sections: {houses.length}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
        />

        <View className="h-4" />
      </ThemedCard>
    </ThemedView>
  )
}

export default SectionListScreen;
