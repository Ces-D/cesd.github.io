import React from 'react'

type Props = {
  extraTags:number
}

export default function ExtraTagsButton({extraTags}:Props) {
  return (
    <button className="bg-darkGray p-1.5 rounded-md m-1.5">
      <p className="capitalize text-sm">+{extraTags}</p>
    </button>
  )
}
