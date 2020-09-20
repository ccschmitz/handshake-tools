import { Injectable, Inject } from "injection-js";

import { Platform, PLATFORM_ID, Logger } from '@handshake-tools/core';

@Injectable()
export class HelloWorldService {
    public constructor (
      private logger: Logger,
      @Inject(PLATFORM_ID) private platformId: Platform
    ) {}
    public message() {
      this.logger.debug(`hello, world from ${this.platformId}`);
    }
}
