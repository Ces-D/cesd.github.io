import { GitBranchFillIcon, ArrowRightFillIcon } from "@/assets/icons"

const Prompt = () => {
  return (
    <div className="flex flex-row items-center py-2 px-1">
      <span className="text-sm rounded-l-lg pl-1 pr-2 text-rose-500 h-fit">@guest</span>
      <span className="text-sm rounded-l-lg text-rose-700 h-fit"><ArrowRightFillIcon width='1em' height='1em' /></span>
      <span className="text-sm rounded-l-lg px-2 text-orange-300 h-fit">~/../ces.xyz</span>
      <span className="text-sm rounded-l-lg text-rose-700 h-fit"><GitBranchFillIcon width='1em' height='1em' /></span>
      <span className="text-sm rounded-l-lg pr-1 text-indigo-400 h-fit">v3</span>
      <span className="text-sm rounded-l-lg pr-1 text-indigo-900 h-fit">~</span>
    </div>
  )
}

export default Prompt
