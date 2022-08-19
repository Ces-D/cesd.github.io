import type { SVGAttributes } from "react"

const ArrowRightFillIcon = ({ width, height }: Pick<SVGAttributes<SVGSVGElement>, "width" | "height">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width || "24"} height={height || "24"}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M12 13H4v-2h8V4l8 8-8 8z" fill="currentColor" />
    </svg>
  )
}

export default ArrowRightFillIcon