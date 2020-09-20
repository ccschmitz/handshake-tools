import 'reflect-metadata';
import { program, createCommand } from "commander";
import { Provider, ReflectiveInjector, Type } from 'injection-js';

import { MetadataKeys } from './metadata-keys';

interface CommandConfig {
    description: string;
    providers?: Provider[]
}

export function Command({ description, providers }: CommandConfig) {
    return (target: Type) => {
        const {name, propertyKey} = Reflect.getMetadata(MetadataKeys.Action, target);

        const targetCommand = createCommand();
        targetCommand
            .name(name)
            .description(description)

        targetCommand.action((command) => {
            const { rootInjector } = Reflect.getMetadata(MetadataKeys.Root, target);
            const injector = (rootInjector as ReflectiveInjector).resolveAndCreateChild([{provide: target, useClass: target}, ...(providers || [])]);
            const instance = injector.get(target);
            return instance[propertyKey](command);
        });

        program.addCommand(targetCommand);
    };
}
