import React from "react";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import path from "path";

import Share from "./Icons/Share";

type Props = {
  description: string;
  title: string;
};

export default function ShareButton(props: Props) {
  const router = useRouter();
  const dimensions = 20

  return (
    <button className="rounded-md bg-lightGray dark:bg-darkGray px-2 mb-2">
      <RWebShare
        data={{
          text: props.description,
          title: props.title,
          url: path.join(router.basePath, router.asPath),
        }}
      >
        <div className="flex w-full flex-row items-center justify-center gap-x-2 p-1">
          <p className="text-tag">Share</p>
          <Share w={dimensions} h={dimensions} />
        </div>
      </RWebShare>
    </button>
  );
}
