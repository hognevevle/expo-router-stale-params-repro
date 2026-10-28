import { Button, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

// Opens a real deep link (goes through Linking, like a notification tap or `xcrun simctl openurl`).
export function DeepLink({ path }: { path: string }) {
  return <Button title={`Deep link ${path}`} onPress={() => Linking.openURL(Linking.createURL(path))} />;
}

export function Screen({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16, backgroundColor: 'white' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
});
