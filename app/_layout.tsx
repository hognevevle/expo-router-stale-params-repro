import { useEffect } from 'react';
import * as Linking from 'expo-linking';
import { useNavigationContainerRef } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';

// Logs incoming deep links, and every params change of every `b/[id]` route with its route key.
// The bug shows as two updates on the same key: the new params, then the first-mount params written back.
function useLogIdRoutes() {
  const ref = useNavigationContainerRef();
  useEffect(() => {
    const walk = (state: any, out: string[]) => {
      for (const r of state?.routes ?? []) {
        if (r.name === '[id]') out.push(`${r.key} ${JSON.stringify(r.params)}`);
        if (r.state) walk(r.state, out);
      }
      return out;
    };
    const sub = Linking.addEventListener('url', (e) => console.log('[url]', e.url));
    let last = '';
    const unState = ref.addListener('state', (e: any) => {
      const line = walk(e.data.state, []).join(' | ');
      if (line !== last) console.log('[state] [id] routes:', line || '(none)');
      last = line;
    });
    return () => {
      sub.remove();
      unState();
    };
  }, [ref]);
}

export default function RootLayout() {
  useLogIdRoutes();
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="a">
        <NativeTabs.Trigger.Label>Tab A</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="a.circle" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="b">
        <NativeTabs.Trigger.Label>Tab B</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="b.circle" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
