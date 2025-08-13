import ThemedCard from '@/presentation/shared/themed-card';
import ThemedSwitch from '@/presentation/shared/themed-switch';
import ThemedView from '@/presentation/shared/themed-view';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';


const ThemesScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === 'dark',
    systemMode: false
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? 'dark' : 'light');
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    });
  }

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: false,
      systemMode: value
    });
  }

  return (
    <ThemedView className='mt-5'>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='System Default'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode} 
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
