import { DeepLink, Screen } from '../../components/ui';

// Step 1 of both triggers: open b/one with tf=7d.
export default function TabB() {
  return (
    <Screen title="Tab B">
      <DeepLink path="/b/one?tf=7d" />
    </Screen>
  );
}
