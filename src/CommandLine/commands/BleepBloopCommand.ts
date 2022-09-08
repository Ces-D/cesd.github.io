import type { Command, TextHandlerResponse } from "../definitions";

type BleepBloopCommand = Command<TextHandlerResponse>

const BleepBloopCommand: BleepBloopCommand = {
  name: "bleep-bloop",
  description: "Bleep Bloop!",
  optionDefinitions: [],
  handle: (_) => ({ text: ['bleep bloop', "I'm a robot"] })
}

export default BleepBloopCommand
