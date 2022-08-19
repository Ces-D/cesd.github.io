import type { Command } from "../definitions";

class BleepBloopCommand implements Command {
    public name = "bleep-bloop"
    public description = "Bleep Bloop!"
    public optionDefinitions = []
    public handle = () => { }
}

export default BleepBloopCommand