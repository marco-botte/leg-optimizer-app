import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.marco.leg-optimizer-v1', // Use the same unique ID you put in Xcode
  appName: 'Leg Optimizer',
  webDir: 'build',
  server: {
    // We leave this empty for production so it loads the local "build" folder
    androidScheme: 'https',
    iosScheme: 'https'
  },
ios: {
    webContentsDebuggingEnabled: true 
  }
};

export default config;