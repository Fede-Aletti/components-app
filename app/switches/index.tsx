import ThemedCard from '@/presentation/shared/themed-card';
import ThemedSwitch from '@/presentation/shared/themed-switch';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';

const Switches = () => {
  const [isEnabled, setIsEnabled] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      {/* <Switch
        trackColor={{
          true: '#61DAFB',
          false: '#3e3e3e',
        }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <ThemedCard>
        <ThemedSwitch
          text='Active'
          onValueChange={() => setIsEnabled(previousState => ({ ...previousState, isActive: !previousState.isActive }))}
          value={isEnabled.isActive}
          className='mb-2'
        />

        <ThemedSwitch
          text='Hungry'
          onValueChange={() => setIsEnabled(previousState => ({ ...previousState, isHungry: !previousState.isHungry }))}
          value={isEnabled.isHungry}
          className='mb-2'
        />

        <ThemedSwitch
          text='Happy'
          onValueChange={() => setIsEnabled(previousState => ({ ...previousState, isHappy: !previousState.isHappy }))}
          value={isEnabled.isHappy}
          className='mb-2'
        />

      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
