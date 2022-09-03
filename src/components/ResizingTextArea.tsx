import React, { useRef, useState } from "react"
import type { ChangeEventHandler, KeyboardEventHandler } from "react"
import { useConsoleHistory } from "@/lib/CommandLine"

const ResizingTextArea = ({ disabled, value }: Partial<Pick<HTMLTextAreaElement, "disabled" | "value">>) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const enterCommand = useConsoleHistory(state => state.enterCommand)
  const [textValue, setTextValue] = useState(value ?? '')
  const MIN_ROWS = 1
  const MAX_ROWS = 5

  const inputWidth = (el: HTMLTextAreaElement): string => {
    const text = el.value || el.placeholder
    const elementStyle = window.getComputedStyle(el)
    const fontProperty = elementStyle.font

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d');
    if (context) context.font = fontProperty;
    const textWidth = context?.measureText(text).width ?? 0
    return textWidth + "px"
  }

  const onChangeResizeElementHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {

    // store initial inline overflow property value in a variable for later reverting to original condition
    const initialInlineOverflowY = e.target.style.overflowY;

    // change overflow-y property value to hidden to overcome inconsistent width differences caused by any scrollbar width
    e.target.style.overflowY = 'hidden';

    const totalWidth = inputWidth(e.target);
    e.target.style.width = totalWidth;
    let rows = MIN_ROWS
    e.target.setAttribute("rows", rows.toString());

    while (rows <= MAX_ROWS && e.target.scrollHeight !== e.target.clientHeight) {
      e.target.setAttribute("rows", rows.toString());
      rows++;
    }

    // change overflow to its original condition
    if (initialInlineOverflowY) {
      e.target.style.overflowY = initialInlineOverflowY;
    } else {
      e.target.style.removeProperty("overflow-y");
    }
  }

  const onKeyDownHandler: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault()
      setTextValue('')
      console.log('CTRL C PRESSED')
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      console.log('TAB PRESSED')
    }
    if (e.key === 'Enter' || e.code === '13') {
      e.preventDefault()
      setTextValue('')
      enterCommand(textValue)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      console.log('ARROW UP PRESSED')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      console.log('ARROW DOWN PRESSED')
    }
  }

  return (
    <textarea id="prompt" value={textValue} disabled={disabled} ref={textAreaRef} rows={MIN_ROWS}
      autoFocus autoComplete="off" autoCorrect="off"
      autoCapitalize="off" maxLength={150}
      onKeyDownCapture={onKeyDownHandler}
      onInput={e => setTextValue(e.currentTarget.value)}
      onChange={onChangeResizeElementHandler}
      className="bg-inherit text-sm text-emerald-200 disabled:text-emerald-400 outline-none grow py-2 px-1" />
  )
}

export default ResizingTextArea
