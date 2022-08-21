import ResizingTextArea from './ResizingTextArea'
import Prompt from './Prompt'

const TerminalInput = ({ disabled, value }: Partial<Pick<HTMLTextAreaElement, "disabled" | "value">>) => {

  return (
    <div className="flex w-full flex-row space-x-1">
      <label htmlFor="prompt">
        <Prompt />
      </label>
      <ResizingTextArea disabled={disabled} value={value} />
    </div>
  )
}

export default TerminalInput
