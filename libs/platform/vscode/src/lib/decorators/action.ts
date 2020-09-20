import 'reflect-metadata';

import { MetadataKeys } from './metadata-keys';

export function Action() {
    return (target: unknown, propertyKey: string | symbol) => {
        Reflect.defineMetadata(MetadataKeys.Action, {
            propertyKey,
        }, target.constructor);
    };
}
