import { InjectionToken } from 'injection-js';

export enum Platform {
  Cli = 'CLI',
  VSCode = 'VSCode'
}

export const PLATFORM_ID = new InjectionToken<Platform>('Currently running platorm ID');

export function isPlatformCli(platformId: Platform) {
  return platformId === Platform.Cli
}

export function isPlatformVSCode(platformId: Platform) {
  return platformId === Platform.VSCode
}
