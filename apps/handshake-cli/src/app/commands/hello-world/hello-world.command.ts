import { HelloWorldService } from "@handshake-tools/hello-world";
import { Command, Option } from "@handshake-tools/platform/cli";

@Command({
    name: 'hello-world',
    description: "Performs Sanity Check",
    providers: [HelloWorldService],
})
export class HelloWorldCommand {
    constructor(
      private service: HelloWorldService
    ) {}

    public async run (
      @Option({ flag: '--debug', description: 'Enable debugging.'}) debug = false,
    ) {
        if (debug) {
          this.service.message();
        }
    }
}
