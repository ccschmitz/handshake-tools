import { Logger } from '@handshake-tools/core'
;
export class CliLogger implements Logger {

  public debug(message: string) {
    console.log(message);
  }

  public info(message: string) {
    console.info(message);
  }

  public warn(message: string) {
    console.warn(message);
  }

  public error(message: string) {
    console.error(message);
  }
}
