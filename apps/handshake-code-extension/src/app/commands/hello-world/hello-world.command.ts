import { HelloWorldService } from "@handshake-tools/hello-world";
import { Command, Action } from "@handshake-tools/platform/vscode";

@Command({
    command: "handshake.helloWorld",
    providers: [HelloWorldService],
})
export class HelloWorldCommand {
    constructor(
      private service: HelloWorldService) {}

    @Action()
    public run () {
        this.service.message();
        return Promise.resolve({});
    }
}
