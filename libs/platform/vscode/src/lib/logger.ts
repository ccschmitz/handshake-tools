import * as vscode from 'vscode';

import { Logger } from '@handshake-tools/core';

export class VSCodeLogger implements Logger {

  private channel: vscode.OutputChannel;

  constructor() {
    this.channel = vscode.window.createOutputChannel("Handshake Extension");
  }

  public debug(message: string) {
    this.channel.appendLine(message);
  }

  public info(message: string) {
    this.channel.appendLine(message);
  }

  public warn(message: string) {
    this.channel.appendLine(message);
  }

  public error(message: string) {
    this.channel.appendLine(message);
  }
}
