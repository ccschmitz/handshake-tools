import { Type } from 'injection-js';
import 'reflect-metadata';
import { MetadataKeys } from './metadata-keys';

export function Action(name: string) {
    return (target: unknown, propertyKey: string | symbol) => {
        Reflect.defineMetadata(MetadataKeys.Action, {
            name,
            propertyKey,
        }, target.constructor);
    };
}
