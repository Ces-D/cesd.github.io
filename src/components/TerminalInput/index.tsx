import { memo } from 'react'
import Prompt from "./Prompt"
import ResizingTextArea, { TextAreaProps } from "./ResizingTextArea"

const TerminalInput = ({ disabled, value, autofocus }: TextAreaProps) => {
  return (
    <div className="flex w-full flex-row space-x-1">
      <label htmlFor="prompt">
        <Prompt muted={disabled} />
      </label>
      {disabled ?
        <p className="text-sm text-emerald-500">{value}</p> :
        <ResizingTextArea autofocus={autofocus} value={value} />
      }
    </div>
  )
}

export default memo(TerminalInput)