import ThemedCard from '@/presentation/shared/themed-card';
import ThemedText from '@/presentation/shared/themed-text';
import ThemedTextInput from '@/presentation/shared/themed-text-input';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
      className='flex-1'
    >
      <ScrollView>
        <ThemedView margin className='px-2'>
          <ThemedCard className='my-2'>
            <ThemedTextInput
              placeholder='Enter your name'
              value={form.name}
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemedCard>

          <ThemedCard className=''>
            <ThemedTextInput
              placeholder='Enter your email'
              keyboardType='email-address'
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedTextInput
              placeholder='Enter your phone'
              keyboardType='phone-pad'
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2' style={{ marginBottom: isIOS ? 300 : 10 }}>
            <ThemedTextInput
              placeholder='Enter your phone'
              keyboardType='phone-pad'
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        {/* {isIOS && (
          <View style={{ height: 200 }} />
        )} */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
