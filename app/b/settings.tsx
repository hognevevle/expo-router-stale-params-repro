import { DeepLink, Screen } from '../../components/ui';

// Trigger 2, step 3: b/one is below this screen; navigate to it with a new `tf`.
export default function Settings() {
  return (
    <Screen title="b/settings">
      <DeepLink path="/b/one?tf=30d" />
    </Screen>
  );
}
