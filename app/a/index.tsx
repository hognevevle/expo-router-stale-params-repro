import { DeepLink, Screen } from '../../components/ui';

// Trigger 1, step 3: navigate from tab A to the already-mounted b/one with a new `tf`.
export default function TabA() {
  return (
    <Screen title="Tab A">
      <DeepLink path="/b/one?tf=30d" />
    </Screen>
  );
}
