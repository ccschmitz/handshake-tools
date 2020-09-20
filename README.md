# HandshakeTools

## Overview
This repository serves as a proof of concept for developing cross platform tooling for Handshake. It is not intended to be used in production.

## Prereqs
1. Ensure you have all required dependencies.
    ```bash
    npm install
    ```
1. Link the local project to your global npm installation.
    ```bash
    npm link
    ```

## How to run the CLI.
1. Build the project
    ```bash
    npm run build -- --project=handshake-cli
    ```
1. Run the Hello, World command.
    ```bash
    handshake hello-world
    ```

## How to run the vs code extension.
1. Use the launch.json task to spin up a development extension host by using the `f5` key.
1. Once the project has built and the host has started, you should see an activation toast for the "handshake" extension.
1. Run the hello, world command in vs code by running `cmd + shift + p` -> `Handshake: hello-world`.
1. To view the output of the command, open the integrated terminal `ctrl + ~`, click the `OUTPUT` tab and select `Handshake Extension` from the drop down on the right.
1. The Handshake logo should also appear on the left navigation, but is not wired up at this time.