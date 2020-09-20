import { HelloWorldService } from "@handshake-tools/hello-world";
import { Command, Action, Option } from "@handshake-tools/platform/cli";

@Command({
    description: "Performs Sanity Check",
    providers: [HelloWorldService],
})
export class HelloWorldCommand {
    constructor(
      private service: HelloWorldService) {}

    @Action('hello-world')
    public run (
        @Option('debug', 'Enable Debugging') debug: boolean
    ) {
        this.service.message();
        return Promise.resolve({});
    }
}
