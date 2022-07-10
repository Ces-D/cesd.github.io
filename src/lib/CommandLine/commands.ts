import { CommandError } from "@/utils/errors";
import type { CommandHandlerParams, Command } from "./definitions";

const IntroductionCommand: Command = {
  name: "intro",
  description: "Hi, Hello, How are you!",
  optionDefinitions: [],
  handle: (params: CommandHandlerParams) => { }
}

const BlogPostOrder = {
  NEWEST: "new",
  OLDEST: "old"
}
const BlogPostsCommand: Command = {
  name: "posts",
  description: "Join to learn what I have learned!",
  optionDefinitions: [{
    name: "order", description: "new to old or vice versa", defaultValue: BlogPostOrder.NEWEST, isRequired: false, validate: (value) => {
      if (!!value) return undefined
      if (!Object.values(BlogPostOrder).includes(value!)) throw new CommandError("Incorrect_Option")
      return value
    }
  }, {
    name: "num", description: "how many", defaultValue: 4, isRequired: false, validate: (value) => {
      if (!!value) return undefined
      const val = parseInt(value!)
      if (val === NaN) throw new CommandError("Incorrect_Option")
      return val
    }
  }],
  handle: (params: CommandHandlerParams) => { }
}

const BleepBloopCommand: Command = {
  name: "bleep-bloop",
  description: "Bleep Bloop!",
  optionDefinitions: [],
  handle: (params: CommandHandlerParams) => { }
}

export default [IntroductionCommand, BlogPostsCommand, BleepBloopCommand]
