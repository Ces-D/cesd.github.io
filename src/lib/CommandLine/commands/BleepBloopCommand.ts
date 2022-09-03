import type { Command, TextHandlerResponse } from "../definitions";

const BleepBloopCommand: Command = {
    name: "bleep-bloop",
    description: "Bleep Bloop!",
    optionDefinitions: [],
    handle: (_): TextHandlerResponse => ({ text: ['bleep bloop', "I'm a robot"] })
}

export default BleepBloopCommand
