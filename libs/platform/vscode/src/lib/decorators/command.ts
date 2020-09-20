import * as vscode from 'vscode';
import 'reflect-metadata';
import { Provider, ReflectiveInjector, Type } from 'injection-js';

import { MetadataKeys } from './metadata-keys';

interface CommandConfig {
    command: string;
    providers?: Provider[]
}

export function Command({ command, providers }: CommandConfig) {
    return (target: Type) => {
        const { propertyKey } = Reflect.getMetadata(MetadataKeys.Action, target);

        const disposable = vscode.commands.registerCommand(command, () => {
          const { rootInjector } = Reflect.getMetadata(MetadataKeys.Root, target);
          const injector = (rootInjector as ReflectiveInjector).resolveAndCreateChild([{provide: target, useClass: target}, ...(providers || [])]);
          const instance = injector.get(target);

          return instance[propertyKey]();
        });

        Reflect.defineMetadata(MetadataKeys.Command, {
          disposable,
        }, target);
    };
}
