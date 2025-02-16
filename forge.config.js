import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

export const packagerConfig = {
  asar: true,  // Empaquetar en un solo archivo ASAR
};
/*
Para Windows:
npm run make
Esto generará un instalador .exe y .squirrel-windows en la carpeta out/make/.

Para Linux:
npm run make -- --platform=linux
Esto generará archivos .deb y .rpm en out/make/.

Para macOS:
npm run make -- --platform=darwin
Esto generará un .dmg y un .zip en out/make/.
*/
export const rebuildConfig = {};

export const makers = [
  {
    name: '@electron-forge/maker-squirrel',  // Instalador para Windows
    config: {
      authors: 'Daniel',
      description: 'Una aplicación de adivinanza de anime',
      exe: 'AnimgeGuesser.exe',
    },
  },
  {
    name: '@electron-forge/maker-zip',  // Para crear un .zip en macOS
    platforms: ['darwin'],
  },
  {
    name: '@electron-forge/maker-dmg',  // Para generar un .dmg en macOS
    platforms: ['darwin'],
    config: {
      title: 'AnimgeGuesser',
      icon: './assets/icon.icns',  // Asegúrate de tener un icono en formato .icns
      background: './assets/dmg-background.png',
      overwrite: true,
    },
  },
  {
    name: '@electron-forge/maker-deb',  // Para crear un paquete .deb en Linux
    platforms: ['linux'],
    config: {
      options: {
        maintainer: 'Daniel',
        homepage: 'https://AnimeGuesser.com',
        icon: './assets/logo.png', // Asegúrate de tener un icono en PNG
      },
    },
  },
  {
    name: '@electron-forge/maker-rpm',  // Para crear un paquete .rpm en Linux
    platforms: ['linux'],
    config: {
      options: {
        summary: 'Una aplicación de adivinanza de anime',
        icon: './assets/icon.png',
      },
    },
  },
];

export const plugins = [
  {
    name: '@electron-forge/plugin-auto-unpack-natives',
    config: {},
  },
  new FusesPlugin({
    version: FuseVersion.V1,
    [FuseV1Options.RunAsNode]: false,
    [FuseV1Options.EnableCookieEncryption]: true,
    [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
    [FuseV1Options.EnableNodeCliInspectArguments]: false,
    [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
    [FuseV1Options.OnlyLoadAppFromAsar]: true,
  }),
];
