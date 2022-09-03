import { CommandError } from "@/utils/errors";
import CommandFactory from "../CommandFactory";
import type { Command, HelpHandlerResponse, TextHandlerResponse } from "../definitions";
import path from 'path'
import { readdirSync } from "fs";

const BlogCommand: Command = {
    name: "blog",
    description: "Read some of the insights that I have gained working in this field!",
    optionDefinitions: [
        {
            name: "num", description: "how many", defaultValue: 4, isRequired: false, validate: (value?: string) => {
                if (!!value) return undefined
                const val = parseInt(value!)
                if (val === NaN) throw new CommandError("Incorrect_Option")
                return val
            }
        }, {
            name: 'help', description: 'find out how', isRequired: false, validate: (value) => {
                if (value) throw new CommandError('Incorrect_Option')
                return undefined
            }
        }
    ],
    handle: (params): HelpHandlerResponse | TextHandlerResponse[] => {
        const optionNames = params.options.map(opt => opt.name)
        const blogPostFiles = readdirSync(path.join(process.cwd(), 'src/pages/posts'), { encoding: "utf-8" })
        const blogPosts = blogPostFiles.map((file) => file.split(".")[0])
        const response: TextHandlerResponse[] = blogPosts.map(post => ({ text: [post, `post/${post}`] }))

        if (optionNames.includes('help')) {
            return CommandFactory.generateHelpCommandResponse(BlogCommand)
        }

        if (optionNames.includes('num')) {
            const opt = params.options.find(opt => opt.name === 'num')
            if (opt) { return response.slice(0, Number(opt?.value)) }
        }
        return response
    }
}


export default BlogCommand
