import 'reflect-metadata';
import * as vscode from 'vscode';
import { Provider, ReflectiveInjector, Type } from 'injection-js';

import { Logger, Platform, PLATFORM_ID } from "@handshake-tools/core";

import { MetadataKeys } from './decorators';
import { EXENSION_CONTEXT } from './extension-context';
import { VSCodeLogger } from './logger';

interface PlatformOptions {
  context: vscode.ExtensionContext;
}

export function bootstrap(commands: Type[], { context }: PlatformOptions, providers: Provider[] = []) {
  const rootInjector = ReflectiveInjector.resolveAndCreate([
    ...providers,
    { provide: PLATFORM_ID, useValue: Platform.VSCode },
    { provide: EXENSION_CONTEXT, useValue: context },
    { provide: Logger, useClass: VSCodeLogger },
  ]);
        commands.forEach(command => {
            Reflect.defineMetadata(MetadataKeys.Root, {
                rootInjector,
            }, command);

            const { disposable } = Reflect.getMetadata(MetadataKeys.Command, command);

            context.subscriptions.push(disposable);
        });
}
