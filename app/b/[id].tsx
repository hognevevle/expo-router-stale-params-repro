import { Button, Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '../../components/ui';

export default function Item() {
  const params = useLocalSearchParams<{ id: string; tf?: string }>();
  return (
    <Screen title="b/[id]">
      <Text style={{ fontSize: 64, fontWeight: '800' }}>{params.id}</Text>
      <Text style={{ fontSize: 64, fontWeight: '800' }}>tf: {params.tf ?? '-'}</Text>
      <Text style={{ fontFamily: 'Menlo', fontSize: 12 }}>{JSON.stringify(params)}</Text>
      <Button title="Push b/settings" onPress={() => router.push('/b/settings')} />
    </Screen>
  );
}
