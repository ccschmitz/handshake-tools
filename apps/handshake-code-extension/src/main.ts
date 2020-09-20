import * as vscode from 'vscode';

import { bootstrap } from '@handshake-tools/platform/vscode';

import{ HelloWorldCommand } from './app/commands';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('Congratulations, your extension "handshake" is now active!');
  bootstrap([HelloWorldCommand], {
    context,
  })
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log('deactivate')
}



