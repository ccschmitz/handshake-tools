import { bootstrap } from '@handshake-tools/platform/cli';

import{ HelloWorldCommand } from './app/commands/hello-world';

bootstrap([HelloWorldCommand], {
  version: "1.0.0",
})
