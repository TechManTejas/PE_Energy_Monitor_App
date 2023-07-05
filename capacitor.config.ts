import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technopolis.pe_apps',
  appName: 'PE Apps',
  webDir: 'build',
  server: {
    androidScheme: 'http'
  }
};

export default config;
