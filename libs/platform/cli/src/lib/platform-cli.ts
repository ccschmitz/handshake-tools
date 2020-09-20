import { program } from 'commander';
import { Provider, ReflectiveInjector, Type } from 'injection-js';

import { Platform, PLATFORM_ID, Logger} from "@handshake-tools/core";

import { MetadataKeys } from './decorators';
import { CliLogger } from './logger';

interface PlatformOptions {
  version: string
}

export function bootstrap(commands: Type[], { version }: PlatformOptions, providers: Provider[] = []) {
  const rootInjector = ReflectiveInjector.resolveAndCreate([
    ...providers,
    { provide: PLATFORM_ID, useValue: Platform.Cli },
    { provide: Logger, useClass: CliLogger},
  ]);
        commands.forEach(command => {
            Reflect.defineMetadata(MetadataKeys.Root, {
                rootInjector,
            }, command);
        });

        program
          .version(version)
          .usage("[options]")
          .parse(process.argv);
}
