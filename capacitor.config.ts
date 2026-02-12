import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'toy-app',
  webDir: 'build',
  server: {
    url: 'http://localhost:5173', // Your SvelteKit dev server port
    cleartext: true // Required to allow http instead of https
  }
};

export default config;
