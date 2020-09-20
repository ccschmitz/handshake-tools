import { InjectionToken } from 'injection-js';
import { ExtensionContext } from 'vscode';

export const EXENSION_CONTEXT = new InjectionToken<ExtensionContext>('VS Code Extension Context');
