import 'reflect-metadata';

import { MetadataKeys } from './metadata-keys';

export function Option(name: string, description: string) {
    return (target: unknown, propertyKey: string | symbol, index: number) => {
        Reflect.defineMetadata(MetadataKeys.Options, {
            name,
            description,
            propertyKey,
            index,
        }, target.constructor);
    };
}
