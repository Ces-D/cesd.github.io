import React, { useRef } from "react"

const ResizingTextArea = ({ disabled, value }: Partial<Pick<HTMLTextAreaElement, "disabled" | "value">>) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

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

  const resizeElement = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const minRows = 1
    const maxRows = 5

    // store initial inline overflow property value in a variable for later reverting to original condition
    const initialInlineOverflowY = e.target.style.overflowY;

    // change overflow-y property value to hidden to overcome inconsistent width differences caused by any scrollbar width
    e.target.style.overflowY = 'hidden';

    const totalWidth = inputWidth(e.target);
    e.target.style.width = totalWidth;

    let rows = minRows;
    e.target.setAttribute("rows", rows.toString());

    while (rows <= maxRows && e.target.scrollHeight !== e.target.clientHeight) {
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

  return (
    <textarea id="prompt" value={value} disabled={disabled} ref={textAreaRef} autoFocus autoComplete="off" autoCorrect="off"
      autoCapitalize="off" maxLength={150} onInput={resizeElement} className="bg-inherit text-sm text-emerald-200 disabled:text-emerald-400 outline-none grow py-2 px-1" />
  )
}

export default ResizingTextArea
