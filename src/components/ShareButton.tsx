import React from "react";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import path from "path";

type Props = {
  description: string;
  title: string;
};

export default function ShareButton(props: Props) {
  const router = useRouter();

  return (
    <button className="rounded-md bg-gray w-16">
      <RWebShare
        data={{
          text: props.description,
          title: props.title,
          url: path.join(router.basePath, router.asPath),
        }}
      >
        <div className="flex w-full flex-row items-center justify-center gap-x-2 p-1">
          <p className="text-xs">Share</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </div>
      </RWebShare>
    </button>
  );
}
