import { GitBranchFillIcon, ArrowRightFillIcon } from "@/assets/icons"

const Prompt = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <span className="text-sm rounded-l-lg text-rose-500 h-fit">@guest</span>
      <span className="text-sm rounded-l-lg text-rose-700 h-fit"><ArrowRightFillIcon width='1em' height='1em' /></span>
      <span className="text-sm rounded-l-lg text-yellow-300 h-fit">./ces.xyz</span>
      <span className="flex justify-center items-center">
        <span className="text-sm rounded-l-lg text-rose-700 h-fit"><GitBranchFillIcon width='1em' height='1em' /></span>
        <span className="text-sm rounded-l-lg text-indigo-400 h-fit">v3</span>
      </span>
      <span className="text-sm rounded-l-lg text-indigo-900 h-fit">~</span>
    </div>
  )
}

export default Prompt
