import type { Command, HandlerTextResponse } from "../definitions";

const BleepBloopCommand: Command = {
    name: "bleep-bloop",
    description: "Bleep Bloop!",
    optionDefinitions: [],
    handle: (params): HandlerTextResponse => ({
        isError: false,
        response: [{ labels: ["bleep", "bloop"], text: "I'm a robot" }]
    })
}

export default BleepBloopCommand
