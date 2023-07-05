import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pe_energy_monitor_app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
