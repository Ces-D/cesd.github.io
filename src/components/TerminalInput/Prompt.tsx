import { GitBranchFillIcon, ArrowRightFillIcon } from "@/assets/icons"

const Prompt = ({ muted = false }: { muted?: boolean }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <span className={muted ? "text-sm rounded-l-lg text-rose-700 h-fit opacity-80" : "text-sm rounded-l-lg text-rose-500 h-fit"}>@guest</span>
      <span className={muted ? "text-sm rounded-l-lg text-rose-900 h-fit opacity-80" : "text-sm rounded-l-lg text-rose-700 h-fit"}><ArrowRightFillIcon width='1em' height='1em' /></span>
      <span className={muted ? "text-sm rounded-l-lg text-yellow-500 h-fit opacity-80" : "text-sm rounded-l-lg text-yellow-300 h-fit"}>./ces.xyz</span>
      <span className="flex justify-center items-center">
        <span className={muted ? "text-sm rounded-l-lg text-rose-900 h-fit opacity-80" : "text-sm rounded-l-lg text-rose-700 h-fit"}><GitBranchFillIcon width='1em' height='1em' /></span>
        <span className={muted ? "text-sm rounded-l-lg text-indigo-600 h-fit opacity-80" : "text-sm rounded-l-lg text-indigo-400 h-fit"}>v3</span>
      </span>
      <span className={muted ? "text-sm rounded-l-lg text-indigo-900 h-fit opacity-80" : "text-sm rounded-l-lg text-indigo-700 h-fit"}>~</span>
    </div>
  )
}

export default Prompt
