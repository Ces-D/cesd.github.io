import { CommandError } from "@/utils/errors";
import { Command, CommandHandlerParams } from "../definitions";

const BlogPostOrder = {
    NEWEST: "new",
    OLDEST: "old"
}

const BlogCommand: Command = {
    name: "posts",
    description: "Read some of the insights that I have gained working in this field!",
    optionDefinitions: [
        {
            name: "order", description: "new to old or vice versa", defaultValue: BlogPostOrder.NEWEST, isRequired: false, validate: (value?: string) => {
                if (!!value) return undefined
                if (!Object.values(BlogPostOrder).includes(value!)) throw new CommandError("Incorrect_Option")
                return value
            }
        }, {
            name: "num", description: "how many", defaultValue: 4, isRequired: false, validate: (value?: string) => {
                if (!!value) return undefined
                const val = parseInt(value!)
                if (val === NaN) throw new CommandError("Incorrect_Option")
                return val
            }
        }
    ],
    handle: (params: CommandHandlerParams) => {
        return {}
    }
}


export default BlogCommand
