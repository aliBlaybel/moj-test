import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.netways.moj',
  appName: 'moj',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {
      appId: '9dd37a40',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }

};

export default config;
