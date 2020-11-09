import 'reflect-metadata';
import { program, createCommand } from "commander";
import { Provider, ReflectiveInjector, Type } from 'injection-js';

import { MetadataKeys } from './metadata-keys';

interface CommandConfig {
    name: string;
    description: string;
    providers?: Provider[]
}

export function Command({ name, description, providers }: CommandConfig) {
    return (target: Type) => {
        const options = (Reflect.getMetadata(MetadataKeys.Options, target) || [])

        const targetCommand = createCommand();
        targetCommand
            .name(name)
            .description(description)

        options.forEach(({flag, description: flagDesc}) => {
          targetCommand.option(flag, flagDesc);
        });

        targetCommand.action((command) => {
            const { rootInjector } = Reflect.getMetadata(MetadataKeys.Root, target);
            const injector = (rootInjector as ReflectiveInjector).resolveAndCreateChild([{provide: target, useClass: target}, ...(providers || [])]);
            const instance = injector.get(target);

            const params = options.map(({name}) => {
              return command[name];
            });

            return instance.run(...params);
        });

        program.addCommand(targetCommand);
    };
}
