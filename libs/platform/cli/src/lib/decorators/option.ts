import 'reflect-metadata';

import { MetadataKeys } from './metadata-keys';

interface OptionConfig {
  flag: string;
  alias?: string;
  description: string;
  required?: boolean;
}

export function Option(config: OptionConfig) {
    return (target: unknown, propertyKey: string | symbol, index: number) => {
        const existingOptions = Reflect.getMetadata(MetadataKeys.Options, target.constructor) || [];
        const [_, name] = /--(\w+)/.exec(config.flag) || [];

        existingOptions.unshift({
          required: false,
          ...config,
          name,
          index,
        });

        Reflect.defineMetadata(MetadataKeys.Options, existingOptions, target.constructor);
    };
}
